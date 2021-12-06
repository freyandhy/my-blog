import Head from "next/head";
import { Header, Footer } from "components/Layout";
import { PostList } from "components/Post";
import { getDatabase } from "lib/notion";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Friandy Notes</title>
        <meta name="description" content="Friandy Notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="h-screen mt-12">
        <PostList posts={posts} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const filter = { property: "status", select: { equals: "published" } };
  const posts = await getDatabase(filter);
  return { props: { posts }, revalidate: 1 };
}
