import type { JSX } from "preact";

/**
 *  Set the description and og:description meta tags.
 *
 * @typedef Props
 * @property {string} content - The description to set.
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function Description(props: JSX.MetaHTMLAttributes) {
  return (
    <>
      <meta name="description" content={props.content} {...props} />
      <meta property="og:description" content={props.content} {...props} />
    </>
  );
}
