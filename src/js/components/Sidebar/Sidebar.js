import styles from "./Sidebar.module.scss";
import { FaRegEyeSlash, FaTicketAlt, FaIdeal } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import { FcIdea } from "react-icons/fc";
import { IoMdContacts, IoIosPerson } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { GrArticle } from "react-icons/gr";
import { MdOutlineSubscriptions, MdOutlineArticle } from "react-icons/md";
import Logo from "../../../image/logo-s.svg";
import { Link } from "react-router-dom";

const menus = [
  {
    id: 1,
    name: "Overview",
    link: "dashboard",
    Icon: BiHomeSmile,
  },

  {
    id: 2,
    name: "Tickets",
    link: "tickets",
    Icon: FaTicketAlt,
  },
  {
    id: 3,
    name: "Ideas",
    link: "contacts",
    Icon: FaIdeal,
  },
  {
    id: 4,
    name: "Contacts",
    link: "dashboard",
    Icon: IoMdContacts,
  },
  {
    id: 5,
    name: "Agents",
    link: "dashboard",
    Icon: IoIosPerson,
  },
  {
    id: 6,
    name: "Articles",
    link: "dashboard",
    Icon: MdOutlineArticle,
  },
];
const submenus = [
  {
    id: 7,
    name: "Settings",
    link: "dashboard",
    Icon: FiSettings,
  },
  {
    id: 8,
    name: "Subscription",
    link: "dashboard",
    Icon: MdOutlineSubscriptions,
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center" }}
          className={styles.link}
        >
          <img src={Logo} alt="Small Logo" /> <p>Dashboard Kit</p>
        </Link>
      </div>
      <ul>
        {menus.map((menu) => {
          const Icon = menu.Icon;
          return (
            <>
              <li key={menu.id} className={styles.items}>
                <Link to={"/" + menu.link} className={styles.link}>
                  <Icon
                    className={styles.icon}
                    style={{ color: "#a4a6b3" }}
                    color="white"
                  />
                  {menu.name}
                </Link>
              </li>
            </>
          );
        })}
        <hr className={styles.divider} />
        {submenus.map((submenu) => {
          const Icon = submenu.Icon;
          return (
            <>
              <li key={submenu.id} className={styles.items}>
                <Icon
                  className={styles.icon}
                  style={{ color: "#a4a6b3" }}
                  color="white"
                />
                {submenu.name}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
