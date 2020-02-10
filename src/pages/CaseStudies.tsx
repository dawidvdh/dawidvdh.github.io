import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import { CaseStudy } from "types";
import ReactMarkdown from "react-markdown";

export default () => {
  const {
    caseStudies,
    moo
  }: {
    caseStudies: CaseStudy[];
    moo: any;
  } = useRouteData();

  return (
    <div>
      <h1>It's blog time.</h1>
      <br />
      All Posts:
      <ReactMarkdown source={moo} />
      <ul>
        {caseStudies.map(caseStudy => (
          <li key={caseStudy.slug}>
            <Link to={`/case-studies/${caseStudy.slug}`}>{caseStudy.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
