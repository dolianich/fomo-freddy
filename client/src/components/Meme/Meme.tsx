import styles from './Memes.module.css';

interface Props {
  img: string;
}

const Meme = ({ img }: Props) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="meme" />
    </div>
  );
};

export default Meme;
