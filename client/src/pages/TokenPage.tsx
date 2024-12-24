import HomeButton from '../components/HomeButton/HomeButton';
import TokenInfo from '../components/TokenInfo/TokenInfo';
import styles from './styles/TokenPage.module.css';
import Lottie from 'lottie-react';
import ftoken from '../../src/assets/animations/ftoken.json';

const TokenPage = () => {
  return (
    <div>
      <HomeButton />
      <div className={styles.content}>
        <Lottie animationData={ftoken} />
        <TokenInfo />
      </div>
    </div>
  );
};

export default TokenPage;
