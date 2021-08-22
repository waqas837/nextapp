//step:2
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    );
  }
}
MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalrenderPage = ctx.renderPage;
  ctx.renderPage = () => {
    return originalrenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };
  const initProps = await Document.getInitialProps(ctx);
  return {
    ...initProps,
    styles: [
      ...React.Children.toArray(initProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
