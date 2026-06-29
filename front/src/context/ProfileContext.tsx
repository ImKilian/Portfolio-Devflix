import { createContext, useContext, useState } from 'react';

export interface Profile {
  name: string;
  img: string;
  bg: string;
}

export const PROFILES: Profile[] = [
  { name: 'Salamèche', img: '/img/salameche.png', bg: 'bg1' },
  { name: 'Bulbizarre', img: '/img/bulbizarre.png', bg: 'bg2' },
  { name: 'Carapuce', img: '/img/carapuce.png', bg: 'bg3' },
  { name: 'Pikachu', img: '/img/pikachu.png', bg: 'bg4' },
];

interface ProfileContextType {
  profile: Profile;
  setProfile: (p: Profile) => void;
}

const ProfileContext = createContext<ProfileContextType | null>(null);

const STORAGE_KEY = 'devflix_profile';

function getSavedProfile(): Profile {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved) as Profile;
  } catch { /* ignore */ }
  return PROFILES[3]; // Pikachu par défaut
}

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfileState] = useState<Profile>(getSavedProfile);

  const setProfile = (p: Profile) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    setProfileState(p);
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile doit être utilisé dans un ProfileProvider');
  return ctx;
}
