import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../src/styles/utils.module.css";
import Link from "next/link";

const name = "suzuki kaito";
export const siteTitle = "Next.js blog";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage} `}
              src="/images/profile.png"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              className={utilStyles.borderCircle}
              src="/images/profile.png"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <Link href="/">homeへ戻る</Link>}
    </div>
  );
};

export default Layout;
