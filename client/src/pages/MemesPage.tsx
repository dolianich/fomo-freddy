import styles from './styles/BasicPage.module.css';
import HomeButton from '../components/HomeButton/HomeButton';
import Meme from '../components/Meme/Meme';
import first from '../assets/memes/1.png';
import second from '../assets/memes/2.png';
import third from '../assets/memes/3.png';
import fourth from '../assets/memes/4.png';
import fifth from '../assets/memes/5.png';
import sixth from '../assets/memes/6.png';
import seventh from '../assets/memes/7.png';
import eighth from '../assets/memes/8.png';
import ninth from '../assets/memes/9.png';
import tenth from '../assets/memes/10.png';
import eleventh from '../assets/memes/11.png';
import twelfth from '../assets/memes/12.png';

const MemesPage = () => {
  const memes = [
    { id: 1, img: first },
    { id: 2, img: second },
    { id: 3, img: third },
    { id: 4, img: fourth },
    { id: 5, img: fifth },
    { id: 6, img: sixth },
    { id: 7, img: seventh },
    { id: 8, img: eighth },
    { id: 9, img: ninth },
    { id: 10, img: tenth },
    { id: 11, img: eleventh },
    { id: 12, img: twelfth },
  ];

  return (
    <div>
      <HomeButton />
      <div className={styles.memes}>
        {memes.map((meme) => (
          <Meme img={meme.img} key={meme.id} />
        ))}
      </div>
    </div>
  );
};

export default MemesPage;
