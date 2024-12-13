import styles from './LeftBar.module.css';
import Price from './Price/Price';
import Arrow from './Arrow/Arrow';
import Pill from './Pill/Pill';

interface Props {
  click?: () => void;
}

const LeftBar = ({ click }: Props) => {
  return (
    <div className={styles.card} onClick={click}>
      <div className={styles.wrapper}>
        <Price />
        <Arrow />
        <Pill />
      </div>
    </div>
  );
};

export default LeftBar;
