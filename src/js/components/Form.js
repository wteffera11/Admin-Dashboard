import { useState } from "react";
import { addArticle } from "../actions/index";
import { useDispatch } from "react-redux";
import styles from "./Form.module.css";

const Form = () => {
  // const articles = useSelector((state) => state);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle({ title: title }));
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="submit" className={styles.button}>
        SAVE
      </button>
    </form>
  );
};

export default Form;
