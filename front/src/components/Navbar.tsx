import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useProfile, PROFILES } from '../context/ProfileContext';
import '../styles/navbar.css';

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSwitchProfile = (p: typeof PROFILES[number]) => {
    setProfile(p);
    setDropdownOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={solid ? 'solid' : ''}>
      <nav className="navigation">
        <NavLink to="/home" className="logo" onClick={closeMenu}>DEVFLIX</NavLink>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-right">
          <button className="search-btn" aria-label="Rechercher">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
          <button className="notif-btn" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
          </button>

          <div className="profile-menu" ref={dropdownRef}>
            <button className="nav-profile-btn" onClick={() => setDropdownOpen((o) => !o)}>
              <img src={profile.img} alt={profile.name} />
              <svg className={`caret ${dropdownOpen ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="profile-dropdown">
                <p className="dropdown-label">Changer de profil</p>
                {PROFILES.map((p) => (
                  <button key={p.name} className={`dropdown-profile ${p.name === profile.name ? 'active' : ''}`} onClick={() => handleSwitchProfile(p)}>
                    <div className={`dropdown-avatar ${p.bg}`}>
                      <img src={p.img} alt={p.name} />
                    </div>
                    <span>{p.name}</span>
                  </button>
                ))}
                <hr className="dropdown-divider" />
                <button className="dropdown-action" onClick={() => { setDropdownOpen(false); navigate('/start'); }}>
                  Gérer les profils
                </button>
              </div>
            )}
          </div>

        </div>

        <div className={`categories ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Accueil</NavLink>
          <NavLink to="/mes-projets" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Mes projets</NavLink>
          <NavLink to="/diplomes-et-competences" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Diplômes & Compétences</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
