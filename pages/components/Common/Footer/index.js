import React from "react";
import Image from "next/image";
const img_rocket = "/images/rocket.png";
const img_box = "/images/box.png";
const img_twitt = "/images/twitt.png";
const img_linked = "/images/linked.png";
const Arrow = "/images/arrow.png";
import Link from "next/link";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }
  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const { is_visible } = this.state;
    return (
      <>
        <footer>
          <div className="blog-footer custom-container">
            <div className="blog-footer-left">
              <div>
                <Link href="/contact-me">Contact me</Link>
                <span className="ml-2">
                  <Link href="/contact-me">
                    <img src="/images/rocket.png" alt="contact" />
                  </Link>
                </span>
              </div>
              <p>&copy; 2020-2021 .All rights reserved.</p>
            </div>
            <div className="blog-footer-right">
              <span>
                <a href="#">
                  <img src={img_box} alt="box" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={img_twitt} alt="twitt" />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/mkayanian">
                  <img src={img_linked} alt="linked" />
                </a>
              </span>
            </div>
            {is_visible && (
              <div className="top-scroll-btn2">
                <a
                  onClick={() => this.scrollToTop()}
                  id="scrollbtn"
                  title="Go to top"
                >
                  <img src={Arrow} alt="scroll top" />
                </a>
              </div>
            )}
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
