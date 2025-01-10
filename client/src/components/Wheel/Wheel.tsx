import styles from './Wheel.module.css';
import { useRef } from 'react';
import Dialog from '../Dialog/Dialog';
import { useState } from 'react';

const Wheel = () => {
  const info = [
    {
      title: 'Moon Shot',
      description: 'Rise in the price of all your crypto-assets',
    },
    {
      title: 'Rug Pull',
      description: "You've lost all your investments in this Gem project",
    },
    { title: 'Bull Run', description: 'Crypto market is going up' },
    { title: 'Whales Dump', description: 'Big guys sell, your assets go down' },
    {
      title: 'Bear Market',
      description: 'The market situation is still the same',
    },
    {
      title: 'Air Drop',
      description: "You've received a ton of money for being active",
    },
    {
      title: 'Hacked',
      description: "You've connected your wallet to the wrong website",
    },
    {
      title: 'NFT Boom',
      description: 'Huge increase in the value of all your JPEGs',
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
        <span className={styles.first}>
          <b>1</b>
        </span>
        <span className={styles.second}>
          <b>2</b>
        </span>
        <span className={styles.third}>
          <b>3</b>
        </span>
        <span className={styles.fourth}>
          <b>4</b>
        </span>
        <span className={styles.fifth}>
          <b>5</b>
        </span>
        <span className={styles.sixth}>
          <b>6</b>
        </span>
        <span className={styles.seventh}>
          <b>7</b>
        </span>
        <span className={styles.eighth}>
          <b>8</b>
        </span>
      </div>
      <button className={styles.spin} onClick={spinWheel}></button>
      <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
        {dialogContent}
      </Dialog>
    </div>
  );
};

export default Wheel;
