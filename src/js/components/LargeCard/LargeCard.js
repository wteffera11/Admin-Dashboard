import styles from "./LargeCard.module.scss";

const LargeCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Unresoved tickets</p>
        <p className={styles.details}>View Detailes</p>
      </div>
      <p className={styles.group}>
        <span className={styles.groupkey}>Group:</span>{" "}
        <span className={styles.groupValue}>Support</span>
      </p>

      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.name}>Waiting on Feature Request</p>
          <p className={styles.value}>233445</p>
        </li>
        <li className={styles.item}>
          <p className={styles.name}>Awaiting Customer Response</p>
          <p className={styles.value}>674</p>
        </li>
        <li className={styles.item}>
          <p className={styles.name}>Awaiting Developer Fix</p>
          <p className={styles.value}>1231</p>
        </li>
        <li className={styles.item}>
          <p className={styles.name}>Pending</p>
          <p className={styles.value}>980</p>
        </li>
      </ul>
    </div>
  );
};

export default LargeCard;
