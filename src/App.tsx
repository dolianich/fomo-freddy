import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavMobile from './components/NavBar/NavMobile';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import FrensPage from './pages/FrensPage';
import GamePage from './pages/GamePage';
import MemesPage from './pages/MemesPage';
import TokenPage from './pages/TokenPage';

function App() {
  return (
    <Router>
      <NavMobile />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="*" Component={NotFoundPage} />
        <Route path="/frens" Component={FrensPage} />
        <Route path="/game" Component={GamePage} />
        <Route path="/memes" Component={MemesPage} />
        <Route path="/token" Component={TokenPage} />
      </Routes>
    </Router>
  );
}

export default App;
