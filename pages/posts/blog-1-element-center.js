import Layout from '../../components/layout'
import Link from "next/link";
import Head from "next/head";
export default function BlogElementCenter() {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        {/* content */}



        <h1>How to center elemnt using css</h1>
        <h2>
          <Link href="/">
            <a>Back to homee</a>
          </Link>
        </h2>
      </Layout>
    )
  }
  