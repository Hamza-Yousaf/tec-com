import React, { Component } from "react";
import Menu from "../Menu";
import classnames from "classnames";
import Image from "next/image";
const img_logo = "/images/logo.png";
const img_twitter = "/images/twitter.png";
const img_linkedin = "/images/linkedin.png";
const img_tog = "/images/tog.png";
const img_whitecross = "/images/white-cross.png";
const img_tel = "/images/tel.png";
const img_pic1 = "/images/pic1.png";
const img_pic2 = "/images/pic2.png";
const img_pic3 = "/images/pic3.png";
const img_pic4 = "/images/pic4.png";
const img_pic5 = "/images/pic5.png";
const img_pic6 = "/images/pic6.png";
const img_rightarrow = "/images/right-arrow.png";
const img_twitterlarge = "/images/twitter-large.png";
const img_skype = "/images/skype.png";
const img_utube = "/images/utube.png";
import Link from "next/link";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      togglemenu: false,
    };
  }

  toggleMenuHandler = () => {
    this.setState({ togglemenu: !this.state.togglemenu });
  };
  render() {
    return (
      <>
        <header>
          <div class="header-sect">
            <div class="mk-beta-version">BETA VERSION</div>
            <div className="custom-container">
              <div className="header-top">
                <div className="header-logo">
                  <a href="/">
                    <img
                      src={img_logo}
                      alt="brand logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="header-socio">
                  <span>
                    <a href="#">
                      <img
                        src="images/twitter.png"
                        alt="twitter logo"
                        class="img-fluid"
                      />
                    </a>
                  </span>

                  <span>
                    <a href="#">
                      <img
                        src="images/linkedin.png"
                        alt="linkedin logo"
                        class="img-fluid"
                      />
                    </a>
                  </span>

                  <span class="ml-5 mbl-cross">
                    <a
                      href="javascript:void(0)"
                      class="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#myNavbar"
                    >
                      <img
                        src="images/tog.png"
                        alt="toggle logo"
                        class="img-fluid"
                      />
                    </a>
                  </span>
                </div>
                <div
                  class="collapse navbar-collapse  header-mennu"
                  id="myNavbar"
                >
                  <div class="custom-container">
                    <div class="header-top">
                      <div class="header-logo">
                        <a href="/">
                          <img
                            src={img_logo}
                            alt="brand logo"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div class="header-socio">
                        <span>
                          <a href="#">
                            <img
                              src="images/twitter.png"
                              alt="twitter logo"
                              class="img-fluid"
                            />
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <img
                              src="images/linkedin.png"
                              alt="linkedin logo"
                              class="img-fluid"
                            />
                          </a>
                        </span>
                        <span class="ml-5 mbl-cross">
                          <a
                            href="javascript:void(0)"
                            class="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#myNavbar"
                          >
                            <img
                              src="images/white-cross.png"
                              alt="toggle logo"
                              class="img-fluid"
                            />
                          </a>
                        </span>
                      </div>
                    </div>

                    <Menu />
                  </div>
                </div>
              </div>
              <div class="">
                <div className="blog-header-content">
                  <div className="blog-header-content-left">
                    <div className="header-blog-lft">
                      <p>Bonjoure, Ciao, Willkommen, Hello</p>
                      <h2>Welcome to Mikael Kayanian personal profile </h2>
                      <h3>CTO/VP of Engineerings</h3>
                      <p className="blog-bottom-txt">
                        Specialising in Big Data, Blockchain, DevOps and more
                        ...{" "}
                      </p>
                      <div className="top-tel">
                        <img
                          src={img_tel}
                          alt="telephone"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="header-blog-right">
                      <div className="blog-latest-twit position-relative">
                        <h3>
                          Market Data <br />
                          Management{" "}
                        </h3>
                        <div className="blog-market-mgt">
                          <ul>
                            <li>
                              <img
                                src={img_pic1}
                                alt="quand"
                                className="img-fluid"
                              />
                            </li>
                            <li>
                              <img
                                src={img_pic3}
                                alt="blooomberg"
                                className="img-fluid"
                              />
                            </li>
                            <li>
                              <img
                                src={img_pic5}
                                alt="xignite"
                                className="img-fluid"
                              />
                            </li>
                          </ul>
                          <ul className="blog-right-icons">
                            <li>
                              <img
                                src={img_pic2}
                                alt="reuters"
                                className="img-fluid"
                              />
                            </li>
                            <li>
                              <img
                                src={img_pic4}
                                alt="nasdaq"
                                className="img-fluid"
                              />
                            </li>
                            <li>
                              <img
                                src={img_pic6}
                                alt="s&p global"
                                className="img-fluid"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="blog-arrow-right">
                          <div className=" tooltip-hover">
                            <a href="/" class="">
                              <img
                                src={img_rightarrow}
                                alt="arrow-right"
                                className="img-fluid"
                              />
                            </a>
                            <div class="toltip-block">
                              <div class="toltip-innerblock">
                                <h3>
                                  COMING
                                  <br />
                                  SOON
                                </h3>
                                <p>Watch this space</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-header-content-right">
                    <div className="blog-mail">
                      <img
                        src={img_twitterlarge}
                        alt="twitter-large"
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog-skype">
                      <img src={img_skype} alt="skype" className="img-fluid" />
                    </div>
                    <div className="blog-utube">
                      <img src={img_utube} alt="utube" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
