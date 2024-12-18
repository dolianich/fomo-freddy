import styles from './MainSection.module.css';
import LeftBar from '../LeftBar/LeftBar';
import NavBar from '../NavBar/NavBar';
import RightBar from '../RightBar/RightBar';
import Hero from './Hero/Hero';
import { useRef } from 'react';
import { useState } from 'react';
import FreeNFT from '../Dialog/ModalContent/FreeNFT';
import Dialog from '../Dialog/Dialog';

const MainSection = () => {
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

  return (
    <div className={styles.screen}>
      <LeftBar
        click={() => {
          setDialogContent(<FreeNFT />);
          toggleDialog();
        }}
      />
      <div className={styles.content}>
        <NavBar />
        <div className={styles.container}>
          <Hero />
        </div>
      </div>
      <RightBar />
      <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
        {dialogContent}
      </Dialog>
    </div>
  );
};

export default MainSection;
