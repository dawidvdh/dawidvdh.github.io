import axios from "axios";
import path from "path";
import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => {
    const { data: posts } /* :{ data: Post[] } */ = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const markdownFile = await readFile(
      path.join(__dirname, "content", "example.md"),
      "utf-8"
    );

    return [
      {
        path: "/",
        template: "src/pages/index"
      },
      {
        path: "/about",
        template: "src/pages/about"
      },
      {
        path: "/blog",
        template: "src/pages/blog",
        getData: () => ({
          posts,
          moo: markdownFile
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/post/${post.id}`,
          template: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      }
    ];
  },
  plugins: [
    "react-static-plugin-emotion",
    "react-static-plugin-typescript",
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
