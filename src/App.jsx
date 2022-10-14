import Home from './companents/SmChangwon/SmChangwon';
import Welcome from './companents/Welcome/Welcome';
import HeroSlider from './companents/HeroSlider/HeroSlider';
import SearchLoginLan from './companents/SearchLoginLang/SearchLoginLang';
import './App.scss';

function App() {
  return (
    <>
      <div className="app">
        {/* <Welcome title={"SMTOWN 창원 홈페이지 메인"}/> */}
        {/* <SearchLoginLan /> */}
        <Home />
        {/* <HeroSlider /> */}
      </div>
    </>
  );
}

export default App;
