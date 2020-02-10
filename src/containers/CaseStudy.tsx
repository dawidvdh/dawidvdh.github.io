import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
// import { CaseStudy } from "../../types";
import ReactMarkdown from "react-markdown";

export default () => {
  const { caseStudy }: { caseStudy: string } = useRouteData();

  return (
    <div>
      <Link to="/case-studies/">{"<"} Back</Link>
      <br />

      <ReactMarkdown source={caseStudy} />
    </div>
  );
};
