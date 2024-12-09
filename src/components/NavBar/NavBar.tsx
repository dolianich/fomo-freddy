import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import Button from './Button/Button';
import home from '../../assets/animations/home.json';
import play from '../../assets/animations/play.json';
import token from '../../assets/animations/token.json';
import memes from '../../assets/animations/memes.json';
import degens from '../../assets/animations/degens.json';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <Button content={home} text="Home" />
      </Link>
      <Link to="/game">
        <Button content={play} text="Game" />
      </Link>
      <Link to="/token">
        <Button content={token} text="Token" />
      </Link>
      <Link to="/memes">
        <Button content={memes} text="Memes" />
      </Link>
      <Link to="/frens">
        <Button content={degens} text="Frens" />
      </Link>
    </div>
  );
};

export default NavBar;
