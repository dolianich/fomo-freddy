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
      <Button content={home} text="Home" />
      <Button content={play} text="Play" />
      <Button content={token} text="Token" />
      <Button content={memes} text="Memes" />
      <Button content={degens} text="Frens" />
    </div>
  );
};

export default NavBar;
