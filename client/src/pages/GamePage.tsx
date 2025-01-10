import Wheel from '../components/Wheel/Wheel';
import styles from './styles/BasicPage.module.css';

const GamePage = () => {
  return (
    <div className={styles.content}>
      <Wheel />
    </div>
  );
};

export default GamePage;
