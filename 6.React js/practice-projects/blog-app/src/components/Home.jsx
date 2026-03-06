import React from "react";
import { posts } from "../data";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2>Blog posts</h2>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <Link to={`/posts/${post.id}`}> View more</Link>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
