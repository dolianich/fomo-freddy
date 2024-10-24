import styles from './MainSection.module.css';
import LeftBar from '../LeftBar/LeftBar';
import NavBar from '../NavBar/NavBar';
import RightBar from '../RightBar/RightBar';

const MainSection = () => {
  return (
    <div className={styles.screen}>
      <LeftBar />
      <div>
        <NavBar />
        <div></div>
      </div>
      <RightBar />
    </div>
  );
};

export default MainSection;
