import type { JSX } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLElement> {
  items: Record<string, string>;
}

export default function Header(props: Props) {
  return (
    <header {...props}>
      <nav>
        {Object.entries(props.items).map(([key, val]) => (
          <a href={val} key={key}>{key}</a>
        ))}
      </nav>
    </header>
  );
}
