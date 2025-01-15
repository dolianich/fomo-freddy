import styles from './styles/BasicPage.module.css';
import HomeButton from '../components/HomeButton/HomeButton';
import Meme from '../components/Meme/Meme';
import first from '../assets/memes/1.png';

const MemesPage = () => {
  return (
    <div>
      <HomeButton />
      <div className={styles.memes}>
        <Meme img={first} />
        <Meme img={first} />
        <Meme img={first} />
        <Meme img={first} />
        <Meme img={first} />
        <Meme img={first} />
        <Meme img={first} />
        <Meme img={first} />
        <Meme img={first} />
        <Meme img={first} />
        <Meme img={first} />
        <Meme img={first} />
      </div>
    </div>
  );
};

export default MemesPage;
