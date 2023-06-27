import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../../components/Layout";
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../../lib/post";

//SSGの場合(外部からデータを持ってくる際に使用されるNext.jsが用意した関数)
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, data, thumbnail取得

  return {
    props: {
      allPostsData,
    },
  };
}

// //SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <section className={utilStyle.headingMd}>
          <p>kaitoは工場勤務しております</p>
        </section>
        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
          <h2>📝エンジニアブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map((post) => {
              return (
                <article key={post.id}>
                  <Link href={`/posts/${post.id}`}>
                    <img
                      src={post.thumbnail}
                      className={styles.thumbnailImage}
                    ></img>
                  </Link>
                  <Link href={`/posts/${post.id}`} legacyBehavior>
                    <a className={utilStyle.boldText}>{post.title}</a>
                  </Link>
                  <br />
                  <small className={utilStyle.lightText}>{post.date}</small>
                </article>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}
