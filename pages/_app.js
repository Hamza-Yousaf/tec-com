import React, { Component } from "react";
import Footer from "./components/Common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../styles/global.css";
// import "../styles/menu.css";
import "../styles/otherpages.css";
import "../styles/newstyle.css";
import "../styles/casestudy.css";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleRootCls: "body-bg",
    };
  }

  componentDidMount() {
    // console.log('window.location.pathname', window.location.pathname);
    if (window.location.pathname === "/") {
      this.setState({
        toggleRootCls: "inner-body",
      });
    } else if (window.location.pathname === "/contact-me") {
      this.setState({
        toggleRootCls: "contact-body-wrapper",
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

export default MyApp;
