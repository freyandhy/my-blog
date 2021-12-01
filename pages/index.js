import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Client } from "@notionhq/client";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>Friandy Notes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>friandy.web.id</h1>

        <div className={styles.grid}>
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://nextjs.org/docs"
              className={styles.card}
            >
              <h2>{post.properties.post.title[0].plain_text}</h2>
              {/* <p>Find in-depth information about Next.js features and API.</p> */}
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const database_id = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id,
    filter: {
      property: "status",
      select: {
        equals: "published",
      },
    },
  });

  return {
    props: {
      posts: response.results,
    },
    revalidate: 1,
  };
}
