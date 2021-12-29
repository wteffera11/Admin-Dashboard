import styles from "./TaskCard.module.scss";

const TaskCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Tasks</p>
        <p className={styles.details}>View All</p>
      </div>
      <p className={styles.group}>
        <span className={styles.groupkey}>Today</span>{" "}
      </p>

      <ul className={styles.list}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="New Task" className={styles.input} />
          <p className={styles.taskAdd}>+</p>
        </div>
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

export default TaskCard;
