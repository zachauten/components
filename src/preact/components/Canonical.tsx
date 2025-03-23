export interface Props {
  url: string;
}

/**
 *  Set the canonical link and og:url meta tags.
 *
 * @typedef Props
 * @property {string} url - The URL of the canonical link.
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function Canonical(props: Props) {
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
