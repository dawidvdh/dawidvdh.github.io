import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import { Post } from "types";
import ReactMarkdown from "react-markdown";

export default () => {
  const {
    posts,
    moo
  }: {
    posts: Post[];
    moo: any;
  } = useRouteData();

  return (
    <div>
      <h1>It's blog time.</h1>
      <br />
      All Posts:
      <ReactMarkdown source={moo} />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
