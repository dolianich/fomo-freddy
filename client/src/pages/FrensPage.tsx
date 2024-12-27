import HomeButton from '../components/HomeButton/HomeButton';
import CommunityInfo from '../components/CommunityInfo/CommunityInfo';
import Lottie from 'lottie-react';
import styles from './styles/BasicPage.module.css';
import dance from '../assets/animations/dance.json';

const FrensPage = () => {
  return (
    <div>
      <HomeButton />
      <div className={styles.content}>
        <Lottie animationData={dance} />
        <CommunityInfo />
      </div>
    </div>
  );
};

export default FrensPage;
