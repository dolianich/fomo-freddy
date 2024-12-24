import HomeButton from '../components/HomeButton/HomeButton';
import styles from './styles/TokenPage.module.css';

const TokenPage = () => {
  return (
    <div>
      <HomeButton />
      <div className={styles.content}></div>
    </div>
  );
};

export default TokenPage;
