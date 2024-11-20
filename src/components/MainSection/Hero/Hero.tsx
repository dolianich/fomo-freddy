import styles from './Hero.module.css';
import Description from './Description/Description';
import Card from './Card/Card';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Description />
        <Card />
      </div>
      <div className={styles.partners}></div>
    </div>
  );
};

export default Hero;
