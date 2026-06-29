import { useNavigate } from 'react-router-dom';
import { PROFILES, useProfile } from '../context/ProfileContext';
import '../styles/start.css';

export default function Start() {
  const navigate = useNavigate();
  const { setProfile } = useProfile();

  const handleSelect = (profile: typeof PROFILES[number]) => {
    setProfile(profile);
    navigate('/home');
  };

  return (
    <div className="start-page">
      <h1>Qui est-ce ?</h1>
      <div className="profiles">
        {PROFILES.map((profile) => (
          <button key={profile.name} className="profile-button" onClick={() => handleSelect(profile)}>
            <div className={`profile-avatar ${profile.bg}`}>
              <img src={profile.img} alt={profile.name} />
            </div>
            <span className="profile-name">{profile.name}</span>
          </button>
        ))}
        <button className="profile-button">
          <div className="profile-avatar bg5">
            <span className="profile-plus">+</span>
          </div>
          <span className="profile-name">Ajouter</span>
        </button>
      </div>
    </div>
  );
}
