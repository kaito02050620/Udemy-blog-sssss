import Head from "next/head";
import Link from "next/link";

const FirstPost = () => {
  return (
    <div>
      <Head>
        <title>最初の投稿</title>
      </Head>
      <h1>最初の投稿</h1>
      <Link href="/">
        <h2>ホームへ戻る</h2>
      </Link>
    </div>
  );
};

export default FirstPost;
