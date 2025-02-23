import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Button from './pages/Button';
import Card from './pages/Card';
import FormElements from './pages/FormElements';
import Accordion from './pages/Accordion';
import Overlays from './pages/Overlays';
import AdvanceForms from './pages/AdvanceForms';

import { IStaticMethods } from 'flyonui/flyonui';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');

      window.HSStaticMethods.autoInit();
    };

    loadFlyonui();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-base-200/60">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button />} />
          <Route path="/card" element={<Card />} />
          <Route path="/form-elements" element={<FormElements />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/overlays" element={<Overlays />} />
          <Route path="/advance-forms" element={<AdvanceForms />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
