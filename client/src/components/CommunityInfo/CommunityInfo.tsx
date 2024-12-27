import styles from './CommunityInfo.module.css';

const CommunityInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        
        <p>
          we are building
          <br />a community-driven project
          <br />
          where every pigeon make sense
        </p>
        <button>JOIN</button>
      </div>
    </div>
  );
};

export default CommunityInfo;
