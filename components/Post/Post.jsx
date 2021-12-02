import Link from "next/link";
import moment from "moment";

const Post = ({ post }) => {
  return (
    <div className="post flex items-center border-dotted border-b last:border-b-0 py-8 px-4 mb-8 cursor-pointer hover:shadow-lg">
      <div className="post__left flex-1 mr-8">
        <Link
          href="/post/[slug]"
          as={`/post/${post.properties.slug.rich_text[0].plain_text}`}
          passHref
        >
          <h2 className="font-lato font-bold text-xl text-gray-600 md:text-3xl lg:text-4xl">
            {post.properties.post.title[0].plain_text}
          </h2>
        </Link>

        {post.properties.tags.multi_select.map((tag) => (
          <p
            key={tag.id}
            className={`font-lato text-left text-${tag.color}-400`}
          >
            {tag.name}
          </p>
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
