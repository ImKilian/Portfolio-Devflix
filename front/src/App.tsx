import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';
import Start from './pages/Start';
import Home from './pages/Home';
import MesProjets from './pages/MesProjets';
import DiplomesCompetences from './pages/DiplomesCompetences';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/start" replace />} />
          <Route path="/start" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mes-projets" element={<MesProjets />} />
          <Route path="/diplomes-et-competences" element={<DiplomesCompetences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  );
}
