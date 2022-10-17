import { useEffect, useState } from 'react';
import Home from './companents/Home/Home';
import Welcome from './companents/Welcome/Welcome';
import './App.scss';
import { useTranslation } from 'react-i18next';

function App() {
  const [welcomeActive, setWelcomeActive] = useState(false)
  const {t} = useTranslation()

  useEffect(() => {
    setTimeout(() => {
      setWelcomeActive(true)
    }, 4000)
  }, []);

  return (
    <>
      <div className="app">
        {welcomeActive ? <Home /> : <Welcome title={t("welcome-title")} />}
      </div>
    </>
  );
}

export default App;
