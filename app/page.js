import Sidebar from "@/components/Sidebar/Sidebar";
import Dashboard from "./dashboard/page";
import styles from "/components/dashboard/dashboard.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Dashboard />
        </div>
      </div>
    </main>
  );
}
