import styles from './NavMobile.module.css';
import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import Button from './Button/Button';
import home from '../../assets/animations/home.json';
import play from '../../assets/animations/play.json';
import token from '../../assets/animations/token.json';
import memes from '../../assets/animations/memes.json';
import degens from '../../assets/animations/degens.json';
import { NavLink } from 'react-router-dom';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(!isOpen);

  const buttons = [
    { id: 1, text: 'Home', content: home, link: '/' },
    { id: 2, text: 'Game', content: play, link: '/game' },
    { id: 3, text: 'Token', content: token, link: '/token' },
    { id: 4, text: 'Memes', content: memes, link: '/memes' },
    { id: 5, text: 'Frens', content: degens, link: '/frens' },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={() => openMenu()}>
          {isOpen ? (
            <X size={28} color="#000000" />
          ) : (
            <List size={28} color="#000000" />
          )}
        </button>
      </div>
      <div className={isOpen ? styles.menuContainer : styles.menuNone}>
        <div className={styles.menu}>
          {buttons.map((button) => (
            <NavLink
              key={button.id}
              to={button.link}
              onClick={() => openMenu()}
              className={({ isActive }) => {
                return isActive ? styles.active : styles.static;
              }}
            >
              <Button content={button.content} text={button.text} />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavMobile;
