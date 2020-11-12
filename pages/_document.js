import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <title>Mikael Kayanian-Home</title>
          {/* <!-- Fav Icons --> */}

          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

          <meta
            name="MK Personal Profile"
            content="Web site created using create-react-app"
          />
          {/* <script src="/static/js-dist.js"></script>
          <script src="/static/menu.js" type="text/javascript"></script> */}

          {/* <!-- Site Metas --></meta> */}
          <title>Mikael Kayanian</title>
        </Head>{" "}
        <body>
          <Main />
          <NextScript />
          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
