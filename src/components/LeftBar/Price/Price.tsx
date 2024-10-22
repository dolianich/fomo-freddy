import styles from './Price.module.css';
import price from '../../../assets/price.svg';
import Lottie from 'lottie-react';
import sticker from '../../../assets/animations/sticker.json';

const Price = () => {
  return (
    <div className={styles.wrapper}>
      <img src={price} alt="999$" className={styles.image} />
      <Lottie animationData={sticker} className={styles.animation}/>
    </div>
  );
};

export default Price;
