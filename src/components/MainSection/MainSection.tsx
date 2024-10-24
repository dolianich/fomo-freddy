import styles from './MainSection.module.css';
import LeftBar from '../LeftBar/LeftBar';
import NavBar from '../NavBar/NavBar';
import RightBar from '../RightBar/RightBar';

const MainSection = () => {
  return (
    <div className={styles.screen}>
      <LeftBar />
      <div className={styles.content}>
        <NavBar />
        <div className={styles.container}></div>
      </div>
      <RightBar />
    </div>
  );
};

export default MainSection;
