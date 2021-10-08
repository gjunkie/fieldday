import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(page) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = page.renderPage;

    try {
      page.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(page);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
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
