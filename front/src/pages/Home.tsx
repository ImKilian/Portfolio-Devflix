import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import VideoModal from '../components/VideoModal';
import { useApi } from '../hooks/useApi';
import type { Media } from '../types';
import '../styles/home.css';

const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
  </svg>
);

const FilmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
  </svg>
);

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const { data: series, loading: loadingSeries } = useApi<Media[]>('/api/medias/serie');
  const { data: films, loading: loadingFilms } = useApi<Media[]>('/api/medias/film');

  return (
    <>
      {modalOpen && <VideoModal onClose={() => setModalOpen(false)} />}
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>CLAVERIE Kilian</h2>
            <p className="hero-subtitle">Junior Développeur Full Stack</p>

            <div className="hero-ranking">
              <img src="/img/top10.png" alt="Top 10" width="30" height="30" />
              #1 dans Passionné du Dev
            </div>

            <div className="hero-motivation">
              <strong>100% Motivé</strong> <span>2026</span>
            </div>

            <div className={`hero-description ${descExpanded ? 'expanded' : ''}`}>
              <p>
                Dans un monde en constante évolution, un ancien agent immobilier décide de changer radicalement de trajectoire.
                Guidé par une curiosité grandissante et un besoin d'accomplissement personnel, il plonge dans l'univers du développement web !
                Un domaine où il découvrira non pas une simple voie professionnelle, mais une véritable passion mêlant logique, créativité et innovation.
                <br /><br />
                À seulement 27 ans, il se spécialise dans la conception et le développement d'applications web modernes,
                porté par une volonté d'apprendre en continu et d'atteindre l'excellence.
                Chaque ligne de code devient pour lui une étape, chaque projet une nouvelle aventure,
                nourrie par la rigueur, la persévérance et le goût du défi.
                <br /><br />
                Vous trouverez ici les projets qui ont marqué son ascension, les compétences qu'il a acquises au fil du temps,
                ainsi que les expériences qui ont façonné son parcours et révélé sa détermination à façonner son propre futur.
              </p>
              <button className="btn-voir-plus" onClick={() => setDescExpanded((v) => !v)}>
                {descExpanded ? 'Voir moins ▲' : 'Voir plus ▼'}
              </button>
            </div>

            <div className="hero-buttons">
              <button className="btn-play" onClick={() => setModalOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
                Lecture
              </button>
              <button className="btn-linkedin" onClick={() => window.open('https://www.linkedin.com/in/kilian-claverie-b002a0270/', '_blank')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                LinkedIn
              </button>
              <a className="btn-cv" href="/CV_Kilian_Claverie_2025.pdf" download>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                </svg>
                CV
              </a>
            </div>
          </div>
        </section>

        <section className="carousels-section">
          {!loadingSeries && series && (
            <Carousel title="Mes séries préférées ..." icon={<CameraIcon />} items={series} />
          )}
          {!loadingFilms && films && (
            <Carousel title="Ma séléction de films" icon={<FilmIcon />} items={films} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
