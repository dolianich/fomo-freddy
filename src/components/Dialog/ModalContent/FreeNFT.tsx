import Lottie from 'lottie-react';
import pill from '../../../assets/animations/PillNFT.json';
import styles from './FreeNFT.module.css';

const FreeNFT = () => {
  return (
    <div className={styles.wrapper}>
      <Lottie animationData={pill} className={styles.animation}/>
    </div>
  );
};

export default FreeNFT;
