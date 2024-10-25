import styles from './Button.module.css';
import Lottie from 'lottie-react';

interface Props {
  content?: object;
  text?: string;
}

const Button = ({ content, text }: Props) => {
  return (
    <button className={styles.btn}>
      <Lottie animationData={content} className={styles.animation}/>
      <p>{text}</p>
    </button>
  );
};

export default Button;
