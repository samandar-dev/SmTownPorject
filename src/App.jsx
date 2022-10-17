import { useEffect, useState } from 'react';
import Home from './companents/Home/Home';
import Welcome from './companents/Welcome/Welcome';
import './App.scss';

function App() {
  const [welcomeActive, setWelcomeActive] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setWelcomeActive(true)
    }, 15000)
  }, []);

  return (
    <>
      <div className="app">
        {welcomeActive ? <Home /> : <Welcome title={"SMTOWN 창원 홈페이지 메인"} />}
      </div>
    </>
  );
}

export default App;
