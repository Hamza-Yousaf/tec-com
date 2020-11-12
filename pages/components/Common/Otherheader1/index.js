import React, { Component } from 'react';
import classnames from 'classnames';
const logo = '/images/logo.png';
const twit_image = '/images/twitter.png';
const linked_large = '/images/linkedin.png';
const black_tog = '/images/tog.png';
const img_whitecross = '/images/white-cross.png';
const img_logo = '/images/logo.png';
const img_twitter = '/images/twitter.png';
const img_linkedin = '/images/linkedin.png';
// import "../../../assets/css/style.css";
import Link from 'next/link';
import Menu from '../Menu';

class OtherHeader1 extends Component {
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
        <div class="contact-body-wrapper">
          <header>
            <div class="position-relative">
              <div class="mk-beta-version">BETA VERSION</div>
              <div className="custom-container">
                <div className="header-top">
                  <div className="header-logo">
                    <a href="/">
                      <img
                        src={logo}
                        alt="brand logo"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="header-socio">
                    <span>
                      <a href="#">
                        <img
                          src={twit_image}
                          alt="twitter logo"
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span>
                      <a href="https://www.linkedin.com/in/mkayanian">
                        <img
                          src={linked_large}
                          alt="linkedin logo"
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span className="ml-5 mbl-cross">
                      <a
                        href="javascript:void(0)"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#myNavbar"
                      >
                        <img
                          src={black_tog}
                          alt="toggle logo"
                          className="img-fluid"
                        />
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="collapse navbar-collapse  header-mennu"
                  id="myNavbar"
                >
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
                              src={img_twitter}
                              alt="twitter logo"
                              className="img-fluid"
                            />
                          </a>
                        </span>
                        <span>
                          <a href="https://www.linkedin.com/in/mkayanian">
                            <img
                              src={img_linkedin}
                              alt="linkedin logo"
                              className="img-fluid"
                            />
                          </a>
                        </span>
                        <span className="ml-5 mbl-cross">
                          <a
                            href="javascript:void(0)"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#myNavbar"
                          >
                            <img
                              src={img_whitecross}
                              alt="toggle logo"
                              className="img-fluid"
                            />
                          </a>
                        </span>
                      </div>
                    </div>
                    <Menu />
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </>
    );
  }
}

export default OtherHeader1;
