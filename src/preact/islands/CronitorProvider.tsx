import * as Cronitor from "@cronitorio/cronitor-rum";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  key: string;
}

/**
 *  A provider for Cronitor analytics. Use in application wrapper.
 *
 * @typedef Props
 * @property {ComponentChildren} children - Child components.
 * @property {string} key - The Cronitor api key.
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function CronitorProvider(props: Props) {
  if (typeof document === "undefined") {
    return;
  }
  Cronitor.load(props.key, {
    debug: false, // <-- You can enable this to see logs in the console
    trackMode: "off", // <-- You can change this to 'off' to track events manually
  });
  Cronitor.track("Pageview");
  return (
    <>
      {props.children}
    </>
  );
}
