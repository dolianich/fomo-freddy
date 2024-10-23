import styles from './RightBar.module.css';
import Sticker from './Sticker/Sticker';
import Banner from './Banner/Banner';

const RightBar = () => {
  return (
    <div className={styles.wrapper}>
      <Sticker />
      <Banner />
    </div>
  );
};

export default RightBar;
