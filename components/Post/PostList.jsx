import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="post-list mt-12">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;