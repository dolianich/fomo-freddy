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
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>
      <div className={isOpen ? styles.menuContainer : styles.menuNone}>
        <div className={styles.menu}>
          <Button content={home} text="Home" />
          <Button content={play} text="Play" />
          <Button content={token} text="Token" />
          <Button content={memes} text="Memes" />
          <Button content={degens} text="Frens" />
        </div>
      </div>
    </>
  );
};

export default NavMobile;
