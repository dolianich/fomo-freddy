import styles from './RightBar.module.css';
import Sticker from './Sticker/Sticker';
import Banner from './Banner/Banner';
import Error from './Error/Error';

const RightBar = () => {
  return (
    <div className={styles.wrapper}>
      <Sticker />
      <Banner />
      <Error />
    </div>
  );
};

export default RightBar;
