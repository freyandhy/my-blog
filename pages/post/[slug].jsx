import Link from "next/link";
import Head from "next/head";
import { ArrowNarrowLeft } from "components/Icons";
import { Header, Footer } from "components/Layout";
import { generateSlug } from "lib/helper";
import { Block } from "components/Post";
import { getDatabase, getPage, getBlocks, getBlockIdBySlug } from "lib/notion";

const PostDetail = ({ blocks, page }) => {
  if (!page || !blocks) {
    return null;
  }

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>{page.properties.post.title[0].plain_text}</title>
        <meta
          name="description"
          content={page.properties.post.title[0].plain_text}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="h-screen mt-12">
        <Link href="/" passHref>
          <div className="flex hover:font-bold cursor-pointer mb-8">
            <ArrowNarrowLeft /> <span className="ml-2">Back to Homepage</span>
          </div>
        </Link>

        {blocks &&
          blocks.map((block) => <Block key={block.id} block={block} />)}
      </main>
      <Footer />
    </div>
  );
};

export default PostDetail;

export const getStaticPaths = async () => {
  const filter = { property: "status", select: { equals: "published" } };
  const database = await getDatabase(filter);
  const paths = database.map((page) => ({
    params: { slug: generateSlug(page) },
  }));

  return { paths, fallback: true };
};

export async function getStaticProps({ params }) {
  try {
    const id = await getBlockIdBySlug(params.slug);
    const page = await getPage(id);
    const blocks = await getBlocks(id);
    return { props: { blocks, page } };
  } catch (err) {
    console.log(err);
  }
}
