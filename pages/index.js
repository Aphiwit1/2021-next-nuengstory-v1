import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import styles from "../components/layout.module.css";
import Link from "next/link";
//home page
export default function Home({ blogList }) {

  return (
    <>
      <Layout home>

        <Head>
          <title>{siteTitle}</title>
        </Head>


        <div className={styles.flexContainer}>
          <Link href="posts/test">
            <a>
              <div className={styles.blogContainer}>
                <div className={styles.blogImage}>
                  
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

          {/* <Link href="posts/blog-1-element-center">
            <a>
              <div className={styles.blogContainer}>
                <div className={styles.blogImage}>tttt</div>
                <div className={styles.blogDetail}>
                  <div className={styles.title}>
                    #CSS Trick: วิธีจัด Element ไว้ตรงกลางของหน้าจอเว็บไซต์
              </div>
                  <div className={styles.titleDate}>31/05/64</div>
                  <div className={styles.createdBy}>Created by Aphiwit</div>
                </div>
              </div>
            </a>
          </Link> */}




        </div>


      </Layout>
    </>
  );
}
