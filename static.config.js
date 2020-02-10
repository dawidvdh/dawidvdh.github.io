import path from "path";
import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

async function getContents(fileName) {
  return readFile(
    path.join(__dirname, "content", "case-studies", `${fileName}.md`),
    "utf-8"
  );
}

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => {
    const markdownFile = await readFile(
      path.join(__dirname, "content", "about.md"),
      "utf-8"
    );

    const caseStudies = [
      { slug: "cancer-dojo", title: "Cancer Dojo" },
      { slug: "cartel-house", title: "Cartel House" },
      { slug: "mycujoo", title: "MyCujoo" }
    ];

    return [
      {
        path: "/",
        template: "src/pages/index"
      },
      {
        path: "/about",
        template: "src/pages/About"
      },
      {
        path: "/case-studies",
        template: "src/pages/CaseStudies",
        getData: async () => ({
          moo: markdownFile,
          caseStudies
        }),
        children: caseStudies.map((caseStudy /* : CaseStudy */) => ({
          path: caseStudy.slug,
          template: "src/containers/CaseStudy",
          getData: async () => ({
            caseStudy: await getContents(caseStudy.slug)
          })
        }))
      },
      {
        path: "/contact",
        template: "src/pages/Contact"
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
