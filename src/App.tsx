import './App.css';
import TopBar from './components/TopBar/TopBar';
import MainSection from './components/MainSection/MainSection';
import NavMobile from './components/NavBar/NavMobile';

function App() {
  return (
    <>
      <NavMobile />
      <TopBar />
      <MainSection />
    </>
  );
}

export default App;
