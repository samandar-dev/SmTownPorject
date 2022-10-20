import Home from './companents/Home/Home';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Welcome from './companents/Welcome/Welcome';
import './App.scss';
import SmChangAbout from './companents/SmChangAbout/SmChangAbout';
import { Route, Router, Routes } from 'react-router-dom';

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
        {/* {welcomeActive ? <Home /> : <Welcome title={t("welcome-title")} />} */}
        <SmChangAbout />
      </div>
    </>
  );
}

export default App;
