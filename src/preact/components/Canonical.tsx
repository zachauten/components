import type { JSX } from "preact";

export interface Props {
  url: string;
}

export default function Canonical(props: Props): JSX.Element {
  return (
    <>
      <meta property="og:url" content={props.url} />
      <link
        rel="canonical"
        href={props.url}
      />
    </>
  );
}
