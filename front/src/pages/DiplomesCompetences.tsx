import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useApi } from '../hooks/useApi';
import type { Skill } from '../types';
import '../styles/diplomes.css';

export default function DiplomesCompetences() {
  const { data: skills, loading, error } = useApi<Skill[]>('/api/skills');

  return (
    <>
      <Navbar />
      <main className="diplomes-page">
        <section className="diplomes-section">
          <h2>Mes diplômes</h2>
          <div className="diplomes-grid">
            <div className="diplome-card">
              <h3>BTS Professions Immobilières</h3>
              <img src="/img/bts-professions-immobilières.jpg" alt="BTS Professions Immobilières" />
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2>Mes compétences</h2>
          {loading && <p>Chargement...</p>}
          {error && <p>Erreur : {error}</p>}
          <div className="skills-grid">
            {skills?.map((skill) => (
              <div key={skill.id} className="skill-card">
                <img src={skill.icon} alt={skill.name} width={48} height={48} />
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
