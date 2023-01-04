import { PostCard } from "../PostCard";
import P from "prop-types";
import "./styles.css";
import { React } from "react";

export const Posts = ({ posts = [] }) => {
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

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    })
  ),
};
