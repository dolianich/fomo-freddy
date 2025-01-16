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
        <a href='https://t.me/fomofreddy'>JOIN</a>
      </div>
    </div>
  );
};

export default CommunityInfo;
