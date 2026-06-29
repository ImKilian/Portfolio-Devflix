import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useApi } from '../hooks/useApi';
import type { Projet } from '../types';
import '../styles/projets.css';

export default function MesProjets() {
  const { data: projets, loading, error } = useApi<Projet[]>('/api/projets');

  return (
    <>
      <Navbar />
      <main className="projets-page">
        <section className="projets-section">
          <h2>Mes projets</h2>
          {loading && <p>Chargement...</p>}
          {error && <p>Erreur : {error}</p>}
          <div className="projects-grid">
            {projets?.map((projet) => (
              <div key={projet.id} className="project-card">
                <h3>{projet.title}</h3>
                <img src={projet.img} alt={projet.title} />
                <p>{projet.description}</p>
                <div className="project-technologies">
                  {projet.technologies.map(({ techno }) => (
                    <div key={techno.id} className="techno-item">
                      <img src={techno.icon} alt={techno.name} width={48} height={48} />
                      <h4>{techno.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
