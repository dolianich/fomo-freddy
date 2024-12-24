import styles from './HomeButton.module.css';
import { NavLink } from 'react-router-dom';
import { CaretLeft } from '@phosphor-icons/react';

const HomeButton = () => {
  return (
    <NavLink to="/" className={styles.btn}>
      <p>
        <CaretLeft size={28} weight="regular" />
        back to home page
      </p>
    </NavLink>
  );
};

export default HomeButton;
