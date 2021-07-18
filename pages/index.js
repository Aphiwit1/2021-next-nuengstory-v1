import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import styles from "../components/layout.module.css";
import Link from "next/link";
import ElementCenter from '../public/element_center.png'
import ClipPathCover from "../public/Clippath.png";

//home page
export default function Home({ blogList }) {

  return (
    <>
      <Layout home>

        <Head>
          <title>{siteTitle}</title>
          <link rel="shortcut icon" href="https://dl.dropboxusercontent.com//s/23143dc4r1kes62/N.ico?dl=0" />
        </Head>


        <div className={styles.flexContainer}>
          <Link href="posts/blog-1-element-center">
            <a>
              <div className={styles.blogContainer}>
                <div className={styles.blogImage}>
                    <Image  alt="title logo" className={styles.imageCover} src={ElementCenter}/>
                </div>
                <div className={styles.blogDetail}>
                  <div className={styles.title}>
                    #CSS Trick: วิธีจัด Element ไว้ตรงกลางของหน้าจอเว็บไซต์
              </div>
                  <div className={styles.titleDate}>31/05/64</div>
                  <div className={styles.createdBy}>Created by Aphiwit</div>
                </div>
              </div>
            </a>
          </Link>

        
          <Link href="posts/blog-2-clip-path">
            <a>
              <div className={styles.blogContainer}>
                <div className={styles.blogImage}>
                    <Image  alt="title logo" className={styles.imageCover} src={ClipPathCover}/>
                </div>
                <div className={styles.blogDetail}>
                  <div className={styles.title}>
                  #CSS: กำหนด element เป็นรูปร่างต่างๆด้วย Clip-path
              </div>
                  <div className={styles.titleDate}>31/05/64</div>
                </div>
              </div>
            </a>
          </Link>



        </div>


      </Layout>
    </>
  );
}
// https://www.dropbox.com/s/owwafmerbzupwyq/blog1-cover.png?dl=0
