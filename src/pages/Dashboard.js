import Overview from "../js/components/Overview/Overview";
import Sidebar from "../js/components/Sidebar/Sidebar";
import styles from "./Dashboard.module.scss";
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Sidebar /> <Overview />
    </div>
  );
};

export default Dashboard;
