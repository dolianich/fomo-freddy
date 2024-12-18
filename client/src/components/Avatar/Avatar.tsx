import Lottie from 'lottie-react';
import avatar from '../../assets/animations/avatar.json';
import scream from '../../assets/animations/scream.json';
import styles from './Avatar.module.css';
import { useState } from 'react';

const Avatar = () => {
  const [state, setState] = useState('idle');

  const animation = () => {
    setState('scream');
    setTimeout(() => setState('idle'), 2000);
  };

  return (
    <button
      className={styles.container}
      onClick={() => animation()}
      disabled={state === 'scream' ? true : false}
    >
      <Lottie animationData={state === 'idle' ? avatar : scream} />
    </button>
  );
};

export default Avatar;
