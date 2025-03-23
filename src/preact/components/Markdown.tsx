// Copyright 2024 the JSR authors. All rights reserved. MIT license.
import { Marked, render } from "@deno/gfm";
import { markedSmartypants } from "marked-smartypants";

import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-tsx.js";
import "prismjs/components/prism-bash.js";

Marked.marked.use(markedSmartypants());

/**
 * Render markdown to HTML.
 *
 * @typedef MarkdownProps
 * @property {string} source - The markdown source to render.
 * @property {string} baseURL - The base URL for relative links.
 * @property {string} mediaBaseURL - The base URL for media.
 *
 * @param {MarkdownProps} props
 * @returns {JSX.Element}
 */
export default function Markdown(
  { source, baseURL, mediaBaseURL }: {
    source: string;
    baseURL?: string;
    mediaBaseURL?: string;
  },
) {
  const html = render(source, {
    allowIframes: false,
    baseUrl: baseURL,
    mediaBaseUrl: mediaBaseURL,
  });
  return (
    <article
      class="markdown-body"
      // deno-lint-ignore react-no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
