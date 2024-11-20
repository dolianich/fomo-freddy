import styles from './Card.module.css';
import Lottie from 'lottie-react';
import tits from '../../../../assets/animations/tits.json';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.text}></div>
        <Lottie animationData={tits} />
      </div>
    </div>
  );
};

export default Card;