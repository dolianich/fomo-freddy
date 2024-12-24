import styles from './TokenInfo.module.css';

const TokenInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1>$FOMO</h1>
        <p>
          is a Governance Token
          <br />
          that gives holders direct power
          <br />
          over the project’s development direction
          <br />
          and treasury.
          <br />
          The majority of the $FOMO supply
          <br />
          will be airdropped
          <br />
          to active users
          <br />
          based on their leaderborad rankings.
        </p>
      </div>
    </div>
  );
};

export default TokenInfo;
