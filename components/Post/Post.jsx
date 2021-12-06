import Link from "next/link";
import moment from "moment";
import { renderBgColor } from "lib/helper";

const Post = ({ post }) => {
  return (
    <div className="post flex items-center border-dotted border-b last:border-b-0 py-8 px-4 mb-8 cursor-pointer hover:shadow-lg">
      <div className="post__left flex-1 mr-8">
        <Link
          href="/post/[slug]"
          as={`/post/${post.properties.slug.rich_text[0].plain_text}`}
          passHref
        >
          <h2 className="font-lato font-bold text-xl text-gray-600 md:text-3xl lg:text-4xl mb-2">
            {post.properties.post.title[0].plain_text}
          </h2>
        </Link>

        {post.properties.tags.multi_select.map((tag) => (
          <Link href="#" passHref key={tag.id}>
            <span
              className={`font-lato text-sm bg-${tag.color}-300 hover:bg-${tag.color}-600 text-black hover:text-white text-center py-1 px-3 mr-2 rounded-full`}
            >
              {tag.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="post__right">
        <p className="text-right text-gray-400 font-proza text-sm">
          {moment(post.properties.date.date.start).format("DD MMMM YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Post;
