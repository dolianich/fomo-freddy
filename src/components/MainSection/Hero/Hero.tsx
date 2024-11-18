import styles from './Hero.module.css';
import Description from './Description/Description';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Description />
        <Description />
      </div>
      <div className={styles.partners}></div>
    </div>
  );
};

export default Hero;
