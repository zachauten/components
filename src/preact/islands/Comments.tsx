// Have to use esm to set compat aliases, and exclude the included preact
// import Giscus from "https://esm.sh/@giscus/react@3.1.0?alias=react:preact/compat&alias=react-dom:preact/compat&external=preact";
import Giscus from "@giscus/react";

interface Props {
  repo: `${string}/${string}`;
  repoId: string;
}

/**
 *  A component to display comments with Giscus.
 *
 * @typedef Props
 * @property {`${string}/${string}`} repo - The repository to use for comments.
 * @property {string} repoId - The repository ID.
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function Comments(props: Props) {
  return (
    <div className="comments-container">
      <Giscus
        id="comments"
        repo={props.repo}
        repoId={props.repoId}
        category="Announcements"
        categoryId="DIC_kwDOGFxOwM4CnTk-"
        mapping="pathname"
        strict="1"
        term="Welcome to @giscus/preact component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
      />
    </div>
  );
}
