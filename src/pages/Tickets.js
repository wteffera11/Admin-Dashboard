import Sidebar from "../js/components/Sidebar/Sidebar";
import TicketView from "../js/components/TicketContent/TicketView";
import styles from "./Tickets.module.scss";

const Tickets = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <TicketView />
    </div>
  );
};

export default Tickets;
