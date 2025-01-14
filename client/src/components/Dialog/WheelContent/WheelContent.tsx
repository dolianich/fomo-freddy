import styles from './WheelContent.module.css';

interface Props {
  img: string;
  title: string;
  description: string;
}

const WheelContent = ({ img, title, description }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt="img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WheelContent;
