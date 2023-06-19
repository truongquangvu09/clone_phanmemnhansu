import Sidebar from "@/components/sidebar/Sidebar";
import Feature from "@/components/feature/Feature";
import Bodyframe from "@/components/bodyFrame/bodyFrame";
// import  from "@/pages/recruitmentProcess";
import styles from "./layout.module.css";

export default function Layout({ children }: any) {
    return (
        <div className={`${styles.wraper}`}>
            <div className={`${styles.sidebar}`}>
                <Sidebar />
            </div>
            <div className={`${styles.bodyframe}`}>
                <Bodyframe>{children}</Bodyframe>
            </div>
        </div>
    );
}
