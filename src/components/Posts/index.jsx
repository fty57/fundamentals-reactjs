import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          id={post.id}
          key={post.id}
          body={post.body}
          title={post.title}
          cover={post.cover}
        />
      ))}
    </div>
  );
};
