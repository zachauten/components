import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

/**
 *  A component to display code.
 *
 * @typedef Props
 * @property {ComponentChildren} children - The code to display.
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function Code({ children }: Props) {
  return <pre><code>{children}</code></pre>;
}
