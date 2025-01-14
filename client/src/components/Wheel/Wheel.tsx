import styles from './Wheel.module.css';
import { useRef } from 'react';
import Dialog from '../Dialog/Dialog';
import { useState } from 'react';
import moon from '../../assets/moon.svg';
import rug from '../../assets/rug.svg';
import bull from '../../assets/bull.svg';
import bear from '../../assets/bear.svg';
import boom from '../../assets/boom.svg';
import airdrop from '../../assets/airdrop.svg';
import whale from '../../assets/whale.svg';
import hack from '../../assets/hack.svg';

const Wheel = () => {
  const info = [
    {
      title: 'Moon Shot',
      description: 'Rise in the price of all your crypto-assets',
      img: moon,
    },
    {
      title: 'Rug Pull',
      description: "You've lost all your investments in this Gem project",
      img: rug,
    },
    { title: 'Bull Run', description: 'Crypto market is going up', img: bull },
    {
      title: 'Whales Dump',
      description: 'Big guys sell, your assets go down',
      img: whale,
    },
    {
      title: 'Bear Market',
      description: 'The market situation is still the same',
      img: bear,
    },
    {
      title: 'Air Drop',
      description: "You've received a ton of money for being active",
      img: airdrop,
    },
    {
      title: 'Hacked',
      description: "You've connected your wallet to the wrong website",
      img: hack,
    },
    {
      title: 'NFT Boom',
      description: 'Huge increase in the value of all your JPEGs',
      img: boom,
    },
  ];

  const wheelRef = useRef<HTMLDivElement>(null);

  const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    return dialogRef.current.hasAttribute('open')
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  const spinWheel = () => {
    const x = 1024;
    const y = 9999;

    let deg = Math.floor(Math.random() * (x - y)) + y;

    wheelRef.current!.style.transform = 'rotate(' + deg + 'deg)';

    setTimeout(() => {
      if (deg > 360) {
        deg %= 360;
      }
      let title = '';
      if (deg >= 337 || deg < 22) title = info[0].title;
      if (deg >= 22 && deg < 67) title = info[1].title;
      if (deg >= 67 && deg < 112) title = info[2].title;
      if (deg >= 112 && deg < 157) title = info[3].title;
      if (deg >= 157 && deg < 202) title = info[4].title;
      if (deg >= 202 && deg < 247) title = info[5].title;
      if (deg >= 247 && deg < 292) title = info[6].title;
      if (deg >= 292 && deg < 337) title = info[7].title;

      setDialogContent(title);
      toggleDialog();
    }, 5000);
  };

  return (
    <div className={styles.mainWidget}>
      <div ref={wheelRef} className={styles.wheel}>
        <span className={styles.first}></span>
        <span className={styles.second}></span>
        <span className={styles.third}></span>
        <span className={styles.fourth}></span>
        <span className={styles.fifth}></span>
        <span className={styles.sixth}></span>
        <span className={styles.seventh}></span>
        <span className={styles.eighth}></span>
      </div>
      <button className={styles.spin} onClick={spinWheel}></button>
      <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
        {dialogContent}
      </Dialog>
    </div>
  );
};

export default Wheel;
