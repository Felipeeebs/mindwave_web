import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }
 
  render() {
    return (
      <Html>
        <Head>
          <title>Mindwave - Tech</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name='application-name' content="Mindwave - Tech" />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content="Mindwave - Tech" />
          <meta name='description' content="Desarrollo de software." />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
          <link rel='manifest' href='/manifest.json' />
          <link rel="apple-touch-icon" href="/logo/512x512.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body id="main-wrapper">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
