import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import Button from './Button/Button';
import home from '../../assets/animations/home.json';
import play from '../../assets/animations/play.json';
import token from '../../assets/animations/token.json';
import memes from '../../assets/animations/memes.json';
import degens from '../../assets/animations/degens.json';

const NavBar = () => {
  const buttons = [
    { id: 1, text: 'Home', content: home, link: '/' },
    { id: 2, text: 'Game', content: play, link: '/game' },
    { id: 3, text: 'Token', content: token, link: '/token' },
    { id: 4, text: 'Memes', content: memes, link: '/memes' },
    { id: 5, text: 'Frens', content: degens, link: '/frens' },
  ];

  return (
    <div className={styles.navbar}>
      {buttons.map((button) => (
        <NavLink
          key={button.id}
          to={button.link}
          className={styles.nav}
        >
          <Button content={button.content} text={button.text}/>
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
