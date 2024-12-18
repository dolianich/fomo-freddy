import Lottie from 'lottie-react';
import pill from '../../../assets/animations/PillNFT.json';
import styles from './FreeNFT.module.css';
import Button from './Button';

const FreeNFT = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Lottie animationData={pill} className={styles.animation} />
      </div>
      <Button />
    </div>
  );
};

export default FreeNFT;
