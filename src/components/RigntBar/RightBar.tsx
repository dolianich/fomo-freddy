import styles from './RightBar.module.css';
import Sticker from './Sticker/Sticker';

const RightBar = () => {
  return (
    <div className={styles.wrapper}>
      <Sticker />
    </div>
  );
};

export default RightBar;
