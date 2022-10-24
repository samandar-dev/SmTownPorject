import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import Welcome from './companents/Welcome/Welcome';
import NotFound from './companents/NotFound/NotFound';
import SmTownHome from './companents/SmTownHome/SmTownHome';
import SmChangAbout from './companents/SmChangAbout/SmChangAbout';
import SmTheatrePages from './companents/SmTheatrePages/SmTheatrePages';
import './App.scss';

function App() {
  const { t } = useTranslation()
  const [welcomeActive, setWelcomeActive] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setWelcomeActive(true)
    }, 4000)
  }, []);

  return (
    <>
      <div className="app">
        {welcomeActive
          ? <Routes>
            <Route path='/' element={<SmTownHome />} />
            <Route path='/home' element={<SmTownHome />} />
            <Route path='/about1' element={<SmChangAbout />} />
            <Route path='/about2' element={<SmChangAbout />} />
            <Route path='/about3' element={<SmChangAbout />} />
            <Route path='/about4' element={<SmChangAbout />} />
            <Route path='/theatre1' element={<SmTheatrePages />} />
            <Route path='/theatre2' element={<SmTheatrePages />} />
            <Route path='/theatre3' element={<SmTheatrePages />} />
            <Route path='/theatre3/:id' element={<SmTheatrePages />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          : <Welcome title={t("welcome-title")} />}
      </div>
    </>
  );
}

export default App;
