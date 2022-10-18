import Home from './companents/Home/Home';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Welcome from './companents/Welcome/Welcome';
import Sidebar from "./companents/Sidebar/Sidebar";
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
        {/* {welcomeActive ? <Home /> : <Welcome title={t("welcome-title")} />} */}
        <SmChangAbout />
      </div>
    </>
  );
}

export default App;
