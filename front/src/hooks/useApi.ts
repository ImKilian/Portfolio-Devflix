import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>(path: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_URL}${path}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur ${res.status}`);
        return res.json() as Promise<T>;
      })
      .then((json) => { if (!cancelled) setData(json); })
      .catch((err: Error) => { if (!cancelled) setError(err.message); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [path]);

  return { data, loading, error };
}
