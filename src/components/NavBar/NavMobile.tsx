import styles from './NavMobile.module.css';
import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import Button from './Button/Button';
import home from '../../assets/animations/home.json';
import play from '../../assets/animations/play.json';
import token from '../../assets/animations/token.json';
import memes from '../../assets/animations/memes.json';
import degens from '../../assets/animations/degens.json';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(!isOpen);

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
          <a href="/">
            <Button content={home} text="Home" />
          </a>
          <a href="/game">
            <Button content={play} text="Game" />
          </a>
          <a href="/token">
            <Button content={token} text="Token" />
          </a>
          <a href="/memes">
            <Button content={memes} text="Memes" />
          </a>
          <a href="/frens">
            <Button content={degens} text="Frens" />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
