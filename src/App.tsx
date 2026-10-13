import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GeoLandingPage } from './routes/GeoLandingPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* European country sub-routes (e.g. /eu/germany, /eu/france, /eu/ireland) */}
        <Route path="/eu/:country" element={<GeoLandingPage />} />

        {/* Geo-targeted landing pages (e.g. /uk, /uae, /gulf, /africa, /eu, /germany, /france, etc.) */}
        <Route path="/:region" element={<GeoLandingPage />} />

        {/* Default landing page (root) */}
        <Route path="/" element={<GeoLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
