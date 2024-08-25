import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "/components/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}> {children} </div>
    </div>
  );
};

export default Layout;
