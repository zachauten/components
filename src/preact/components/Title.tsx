interface Props {
  title: string;
}

/**
 *  Set the title and og:title meta tags.
 *
 * @typedef Props
 * @property {string} title - The title of the page.
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function Title(props: Props) {
  return (
    <>
      <meta
        property="og:title"
        content={props.title}
        key="og:title"
      />
      <title>{props.title}</title>
    </>
  );
}
