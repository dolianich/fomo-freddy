import HomeButton from '../components/HomeButton/HomeButton';
import TokenInfo from '../components/TokenInfo/TokenInfo';
import styles from './styles/BasicPage.module.css';
import Lottie from 'lottie-react';
import ftoken from '../../src/assets/animations/ftoken.json';

const TokenPage = () => {
  return (
    <>
      <HomeButton />
      <div className={styles.content}>
        <Lottie animationData={ftoken} />
        <TokenInfo />
      </div>
    </>
  );
};

export default TokenPage;
