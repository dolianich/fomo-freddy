import styles from './styles/BasicPage.module.css';
import HomeButton from '../components/HomeButton/HomeButton';
import GameDescription from '../components/GameDescription/GameDescription';

const GamePage = () => {
  return (
    <div>
      <HomeButton />
      <div className={styles.content}>
        <GameDescription />        
      </div>
    </div>
  );
};

export default GamePage;
