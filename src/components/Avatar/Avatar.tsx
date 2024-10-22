import Lottie from 'lottie-react';
import avatar from '../../assets/animations/avatar.json';
import styles from './Avatar.module.css';

const Avatar = () => {
  return (
    <div className={styles.container}>
      <Lottie animationData={avatar} />
    </div>
  );
};

export default Avatar;
