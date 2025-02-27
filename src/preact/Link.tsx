import type { JSX } from "preact";

export default function Link(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return <a {...props}>{props.children}</a>;
}
