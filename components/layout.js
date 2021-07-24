import styles from "./layout.module.css";
import Link from "next/link";
import  { useRouter } from 'next/router';


const name = "Your Name";
export const siteTitle = "nuengStory | blog";
const myCaptionPath1 = "เปรียบ BUG เหมือนเม็ดทราย (มันเล็กนิดเดียวเหรอ?)"
const myCaptionPath2 = "เปล่าเลย มันเยอะมาก และนับไม่ถ้วน"
const myCaptionPath3 = "-- หนึ่ง บุคคลนิรนาม --"

// layout คือ element ที่ใช้ทุกหน้า เช่น header content footer 
export default function Layout({ children, home }) {
    const router = useRouter()
        console.log("router : ", router)

    return (


        <div className={styles.container}>
            
            {/* Header bar */}
            <header className={styles.header}>
                <div className={styles.headerLeft}><span className={styles.logoFirstWord}>nueng</span><span className={styles.logoSecondWord}>Story</span></div>
                <div className={styles.headerRight}>
                    
   
                    <Link href="/">
                        <a className={router.pathname == "/"? styles['active'] : styles['pageName']}>&#127968; Home</a>
                    </Link>
                    
                    

                    {/* <Link href="/me" >
                        <a className={router.pathname == "/me"? styles['active'] : styles['pageName']}>about me</a>
                    </Link> */}
                </div>
            </header>


            {/* Content each page */}
            <main className={styles.body}>
                
                {children}
            </main>


            {/* {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )} */}
               <div className={styles.MyCaption}>
                    <div>{myCaptionPath1}</div>
                    <div>{myCaptionPath2}</div>
                    <div className={styles.nuengCaption}>
                    {myCaptionPath3}
                    </div>
                </div>

            <footer className={styles.footer}>
                {/* <div className={styles.socialContact}>XXXX</div> */}
             
                <div className={styles.credit}> 
                 <div>©2021 Aphiwit</div>
                 <div>&#128525; Made with love in Phatthalung, Thailand</div>
                
                </div>
            </footer>


          
        </div>
    );
}
