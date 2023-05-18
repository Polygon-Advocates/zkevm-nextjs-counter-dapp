import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Counter dApp" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;800&display=swap"
        rel="stylesheet"
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
