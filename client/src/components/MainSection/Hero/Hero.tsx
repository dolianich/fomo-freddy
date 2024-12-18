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
      <div className={styles.quote}>
        <div className={styles.text}><p>anxiety and fun</p></div>
      </div>
    </div>
  );
};

export default Hero;
