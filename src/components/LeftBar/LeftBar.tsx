import styles from './LeftBar.module.css';
import Price from './Price/Price';
import Arrow from './Arrow/Arrow';
import Pill from './Pill/Pill';

const LeftBar = () => {
  return (
    <div className={styles.wrapper}>
      <Price />
      <Arrow />
      <Pill />
    </div>
  );
};

export default LeftBar;
