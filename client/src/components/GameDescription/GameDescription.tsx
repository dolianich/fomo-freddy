import styles from './GameDescription.module.css';
import Wheel from '../Wheel/Wheel';

const GameDescription = () => {
  return (
    <div className={styles.game}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h1>
            TRY YOUR
            <br />
            LUCK
          </h1>
          <p>
            while we're building a P2E banger,
            <br />
            spin the wheel and discover your fortune
          </p>
        </div>
      </div>
      <Wheel />
    </div>
  );
};

export default GameDescription;
