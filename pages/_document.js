//next
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/41492ee37e.js"
          crossorigin="anonymous"
          defer
        />
      </Head>
      <body>
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
