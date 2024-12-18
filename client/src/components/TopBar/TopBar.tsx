import Avatar from '../Avatar/Avatar';
import Logo from '../Logo/Logo';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Avatar />
    </div>
  );
};

export default TopBar;
