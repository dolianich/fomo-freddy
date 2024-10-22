import styles from './LeftBar.module.css';
import Price from './Price/Price';

const LeftBar = () => {
  return (
    <div className={styles.wrapper}>
      <Price/>
    </div>
  )
}

export default LeftBar
