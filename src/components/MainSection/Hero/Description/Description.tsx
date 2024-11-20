import styles from './Description.module.css';

const Description = () => {
  return (
    <div className={styles.cardBg}>
      <div className={styles.content}>
        <h1>
          FOMO
          <br />
          FREDDY
        </h1>
        <p>
          anxious pegeon
          <br />
          is building a community-drivven
          <br />
          culture where everyone
          <br />
          have fun and support each other
        </p>
        <button><p>JOIN US</p></button>
      </div>
    </div>
  );
};

export default Description;
