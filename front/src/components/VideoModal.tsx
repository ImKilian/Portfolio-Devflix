import { useEffect } from 'react';
import '../styles/videoModal.css';

interface VideoModalProps {
  onClose: () => void;
}

export default function VideoModal({ onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Lecture"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}
