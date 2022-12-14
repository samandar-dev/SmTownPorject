import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SmStay from './companents/SmStay/SmStay';
import { Route, Routes } from 'react-router-dom';
import Welcome from './companents/Welcome/Welcome';
import NotFound from './companents/NotFound/NotFound';
import ScrollTop from "./companents/ScrollTop/ScrollTop";
import SmTownHome from './companents/SmTownHome/SmTownHome';
import SmMuseumPage from './companents/SmMuseum/SmMuseumPages';
import SmChangAbout from './companents/SmChangAbout/SmChangAbout';
import SmPlayground from './companents/SmPlayground/SmPlayground';
import SmTheatrePages from './companents/SmTheatrePages/SmTheatrePages';
import './App.scss';

function App() {
  const { t } = useTranslation()
  const [welcomeActive, setWelcomeActive] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setWelcomeActive(true)
  //   }, 4000)
  // }, []);
 
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
            <Route path='/about3item/:id' element={<SmChangAbout />} />
            <Route path='/about4' element={<SmChangAbout />} />
            <Route path='/theatre1' element={<SmTheatrePages />} />
            <Route path='/theatre2' element={<SmTheatrePages />} />
            <Route path='/theatre3/:id' element={<SmTheatrePages />} />
            <Route path='/museum1' element={<SmMuseumPage />} />
            <Route path='/museum2' element={<SmMuseumPage />} />
            <Route path='/playground1' element={<SmPlayground />} />
            <Route path='/playground2' element={<SmPlayground />} />
            <Route path='/playground3' element={<SmPlayground />} />
            <Route path='/playground4' element={<SmPlayground />} />
            <Route path='/smstay1' element={<SmStay />} />
            <Route path='/smstay2' element={<SmStay />} />
            <Route path='/smstay1/:id' element={<SmStay />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          : <Welcome title={t("welcome-title")} />}
      </div>
      <ScrollTop />
    </>
  );
}

export default App;
