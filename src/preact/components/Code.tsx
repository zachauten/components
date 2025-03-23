import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function Code({ children }: Props) {
  return <pre><code>{children}</code></pre>;
}
