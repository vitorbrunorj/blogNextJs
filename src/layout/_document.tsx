import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br" className="minha-classe-html">
        <Head></Head>
        <body className="minha-classe-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
