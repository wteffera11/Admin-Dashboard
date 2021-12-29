import { FaBell, FaRulerVertical, FaSearch } from "react-icons/fa";
import styles from "./Topbar.module.scss";
import Profile from "../../../image/profile.svg";
const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Overview</div>
      <div className={styles.leftContainer}>
        <div className={styles.icon}>
          <FaSearch />
        </div>
        <div className={styles.icon}>
          <FaBell />
        </div>
        <div className={styles.verticalSeparator}>|</div>
        <p className={styles.userName}>Ermias Tefera</p>
        <div className={styles.userProfile}>
          <img src={Profile} alt="Ermias Tefera" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
