import { connect, useSelector } from "react-redux";
import styles from "./List.module.scss";

const List = () => {
  const articles = useSelector((state) => state.articles);
  console.log(articles);
  return (
    <ul className={styles.list}>
      {articles.map((article) => (
        <li className={styles.item} key={article?.id}>
          {article?.title}
        </li>
      ))}
    </ul>
  );
};

export default List;
