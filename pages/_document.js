import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Field Day Sound." />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://vjs.zencdn.net/7.14.3/video.min.js"></script>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
