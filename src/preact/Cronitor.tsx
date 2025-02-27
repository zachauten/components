import * as Cronitor from "@cronitorio/cronitor-rum";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  key: string;
}

// Must be an "Island" in Fresh. Remote islands aren't supported until Fresh 2.0
export default function Analytics(props: Props) {
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
