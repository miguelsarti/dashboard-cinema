import Header from "@/components/header";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar";
import DashboardContent from "@/components/dashboardContent";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main className={styles.dashboardContainer}>
      <Sidebar />
      <DashboardContent />
      </main>
      
      <Footer />
    </div>
  );
}