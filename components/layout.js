import styles from "./layout.module.css";
import Link from "next/link";
import  { useRouter } from 'next/router';



const name = "Your Name";
export const siteTitle = "nuengStory | blog";

// layout คือ element ที่ใช้ทุกหน้า เช่น header content footer 
export default function Layout({ children, home }) {
    const router = useRouter


    return (
        <div className={styles.container}>
            {/* Header bar */}
            <header className={styles.header}>
                <div className={styles.headerLeft}><span className={styles.logoFirstWord}>nueng</span><span className={styles.logoSecondWord}>Story</span></div>
                <div className={styles.headerRight}>
                    <Link href="/">
                        <a className={styles.pageName}>Home</a>
                    </Link>

                    <Link href="/" >
                        <a className={styles.pageName}>Who's nueng</a>
                    </Link>
                </div>
            </header>

            {/* Content each page */}
            <main className={styles.body}>
                {children}
            </main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
