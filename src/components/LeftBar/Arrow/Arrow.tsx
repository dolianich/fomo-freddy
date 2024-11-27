import Lottie from 'lottie-react';
import arrow from '../../../assets/animations/arrow.json';
import styles from './Arrow.module.css'

const Arrow = () => {
  return <Lottie animationData={arrow} className={styles.arrow}/>;
};

export default Arrow;
