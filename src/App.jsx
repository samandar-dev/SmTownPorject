import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Welcome from './companents/Welcome/Welcome';
import { Route, Routes } from 'react-router-dom';
import SmTownHome from './companents/SmTownHome/SmTownHome';
import SmChangAbout from './companents/SmChangAbout/SmChangAbout';
import './App.scss';

function App() {
  const { t } = useTranslation()
  const [welcomeActive, setWelcomeActive] = useState(false)

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
          </Routes>
          : <Welcome title={t("welcome-title")} />}
      </div>
    </>
  );
}

export default App;
