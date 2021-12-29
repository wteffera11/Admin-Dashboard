import styles from "./Card.module.scss";

const Card = ({ title, value, bgcolor }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default Card;
