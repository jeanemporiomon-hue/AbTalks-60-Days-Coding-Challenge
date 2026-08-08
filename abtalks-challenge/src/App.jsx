import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PersonaProvider } from './context/PersonaContext';
import { PersonaSwitcher } from './components/PersonaSwitcher';
import { MobileFrame } from './components/MobileFrame';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { DayPage } from './pages/DayPage';

// NOTE: BrowserRouter already wraps <App /> in main.jsx, so only
// <Routes> is needed here (not another Router).
function App() {
  return (
    <PersonaProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased">
        <PersonaSwitcher />
        <MobileFrame>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/day/:dayNum" element={<DayPage />} />
            <Route path="/day" element={<Navigate to="/day/12" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MobileFrame>
      </div>
    </PersonaProvider>
  );
}

export default App;
