import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import Header from "./components/Common/Header";
const img_rightarrow = "images/right-arrow.png";
const img_cybersecurity = "images/cyber-security.png";
const img_whiterightarrow = "images/white-right-arrow.png";
const img_machinelearning = "images/machine-learning.png";
const img_clogo1 = "images/c-logo1.png";
const img_clogo2 = "images/c-logo2.png";
const img_clogo3 = "images/c-logo3.png";
const img_clogo4 = "images/c-logo4.png";
const img_blockchain = "images/blockchain.png";
const img_appico1 = "images/app-ico1.png";
const img_appico2 = "images/app-ico2.png";
const img_appico3 = "images/app-ico2.png";
const img_appico4 = "images/app-ico3.png";
const img_appico5 = "images/app-ico4.png";
const img_appico6 = "images/app-ico5.png";
const img_appico7 = "images/app-ico6.png";
const img_appico8 = "images/app-ico8.png";
const img_appico9 = "images/app-ico9.png";
const img_azure = "images/azure.png";
const img_aws = "images/aws.png";
const img_googlecloud = "images/google-cloud.png";
const img_downloadresume = "images/download-resume.png";
const img_link = "images/link.png";
const img_liquidcash = "images/liquidcash.png";
const img_linkedinlarge = "images/linkedin-large.png";
const img_bricktradeimg = "images/bricktrade-img1.png";
const img_bricktrade2img = "images/bricktrade-img2.png";
const img_mobileimg = "images/mobile-img1.png";
const Arrow = "/images/arrow.png";
const img_pluto500img = "images/plut500-img.png";
const img_plutoclearimg = "images/plutoclear-img.png";

const img_hyperont_img = "images/hyperont-img.png";
const img_hyperont_img1 = "images/hyperont-img1.png";

const link = "images/link.png";

class Home extends Component {
  state = {
    moment: "",
  };
  constructor(props) {
    super(props);

    this.state = {
      popup: false,
    };
  }

  togglePopUpHandler = () => {
    this.setState({
      popup: true,
    });
  };

  render() {
    return (
      <>
        <div class="inner-body">
          <Header />
          <div className="custom-container">
            <div className="blog-aboutme-sect">
              <div className="blog-aboutme-sect-left">
                <div className="blog-aboutme-sect-left-top">
                  <div className="blog-aboutme-sect-left-txt position-relative">
                    <div className="blog-uparrow-right">
                      <div className="tooltip-hover">
                        <a href="/">
                          <img
                            src={img_rightarrow}
                            alt="up-arrow"
                            className="img-fluid"
                          />
                        </a>

                        <div className="toltip-block">
                          <div className="toltip-innerblock">
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
                    <h3>
                      Cyber
                      <br />
                      Security
                    </h3>
                    <div className="blog-cyber-security">
                      <img
                        src={img_cybersecurity}
                        alt="cyber-security"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="blog-aboutme-sect-left-img position-relative">
                    <div className="blog-blue-uparrow-right">
                      <a href="/technology-tools">
                        <img
                          src={img_whiterightarrow}
                          alt="up-arrow"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <img
                      src={img_machinelearning}
                      alt="machine-learning"
                      className="img-fluid"
                    />
                    <p>
                      Leverage the potential <br />
                      of <span>Machine learning</span>
                    </p>
                  </div>
                </div>
                <div className="blog-aboutme-sect-left-bottom position-relative">
                  <div className="blog-blockchain-img">
                    <img
                      src={img_blockchain}
                      alt="blockchain"
                      className="img-fluid"
                    />
                  </div>
                  <div className="blog-enterprise-blockchain">
                    <p>
                      Enterprise Blockchain <br />
                      DApps Design & Development{" "}
                    </p>
                    <ul>
                      <li>
                        <img
                          src={img_clogo1}
                          alt="logo"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src={img_clogo2}
                          alt="logo"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src={img_clogo3}
                          alt="logo"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src={img_clogo4}
                          alt="logo"
                          className="img-fluid"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="blog-arrow-right blog-blue-bg">
                    <div className="tooltip-hover">
                      <a href="#">
                        <img
                          src={img_whiterightarrow}
                          alt="arrow-right"
                          className="img-fluid"
                        />
                      </a>
                      <div className="toltip-block">
                        <div className="toltip-innerblock">
                          <h3>
                            COMING
                            <br />
                            SOON
                          </h3>
                          <p> Watch this space </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-aboutme-sect-right position-relative">
                <h3>About me</h3>
                <p>
                  Innovative career technologist with over 20 + years experience
                  delivering creative, client- centric tool , with value- driven
                  solutions . Proven leadership experience ranging from
                  evaluating technology to discovered niche products for
                  bootstrapped and venture-backed startups.Highly data-driven,
                  committed to designing coherent enterprise platforms with a
                  wide range of technical domain expertise and business acumen.
                  Entrepreneur and founder of successful software design &
                  development, showcasing ability to drive change through
                  consensus within an organisation.{" "}
                </p>
                <div className="blog-download">
                  <div className="tooltip-hover">
                    <a href="#">
                      <img
                        src={img_downloadresume}
                        alt="download-resume"
                        className="img-fluid"
                      />
                    </a>
                    <div className="toltip-block">
                      <div className="toltip-innerblock">
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
            <div className="blog-technologu-sect">
              <div className="blog-technologu-sect-left">
                <div className="blog-technologu-sect-left-txt position-relative">
                  <h3>
                    APPLICATION
                    <br />
                    DEVELOPMENT
                  </h3>
                  <h4>Web Frameworks</h4>
                  <ul>
                    <li>
                      <img src={img_appico1} alt="logo" className="img-fluid" />
                    </li>
                    <li>
                      <img src={img_appico2} alt="logo" className="img-fluid" />{" "}
                    </li>

                    <li>
                      <img src={img_appico4} alt="logo" className="img-fluid" />
                    </li>
                    <li>
                      <img src={img_appico5} alt="logo" className="img-fluid" />{" "}
                    </li>
                    <li>
                      <img src={img_appico6} alt="logo" className="img-fluid" />
                    </li>
                  </ul>
                  <h4>Mobile Frameworks</h4>
                  <ul className="blog-logo-size">
                    <li>
                      <img src={img_appico2} alt="logo" className="img-fluid" />
                    </li>
                    <li>
                      <img src={img_appico7} alt="logo" className="img-fluid" />{" "}
                    </li>
                    <li>
                      <img src={img_appico8} alt="logo" className="img-fluid" />
                    </li>
                    <li>
                      <img src={img_appico9} alt="logo" className="img-fluid" />
                    </li>
                  </ul>
                  <div className="blog-arrow-right">
                    <a href="/custom-software-development">
                      <img
                        src={img_rightarrow}
                        alt="arrow-right"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="blog-technologu-sect-left-img position-relative">
                  <ul>
                    <li>
                      <img src={img_azure} alt="azure" className="img-fluid" />
                    </li>
                    <li className="blog-cust-wd">
                      <img
                        src={img_googlecloud}
                        alt="google-cloud"
                        className="img-fluid"
                      />
                    </li>
                    <li className="blog-cust-wd">
                      <img src={img_aws} alt="aws" className="img-fluid" />
                    </li>
                  </ul>
                  <p>
                    Increase Agility with <br />
                    Cloud & DevOps Practices{" "}
                  </p>
                  <div className="blog-arrow-right">
                    <div className="tooltip-hover">
                      <a href="#">
                        <img
                          src={img_rightarrow}
                          alt="arrow-right"
                          className="img-fluid"
                        />
                      </a>
                      <div className="toltip-block">
                        <div className="toltip-innerblock">
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
              <div className="blog-technologu-sect-right">
                <div className="blog-technologu-sect-block">
                  <div className="mb-4">
                    <img
                      src={img_linkedinlarge}
                      alt="linkedin-large"
                      className="img-fluid"
                    />
                  </div>
                  <p>Next Webinar on Linkedin</p>
                  <h3>Financial Asset Tokenization </h3>
                  <p>25 Jan, 2021</p>
                  <div className="mt-4 d-flex">
                    <div className="tooltip-hover">
                      <a href="#" className="prime-bttn">
                        Register Now
                      </a>
                      <div className="toltip-block">
                        <div className="toltip-innerblock">
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
          </div>
          <div className="blog-subscribe-block">
            <div className="blog-subscribe-block-left">
              <h3>Fintech articles delivered straight to your inbox</h3>
              <div className="blog-subscribe-form">
                <div className="blog-subscribe-form-input">
                  <input type="text" placeholder="Enter your email addresss" />
                </div>
                <div className="d-flex">
                  <div className="tooltip-hover">
                    <a href="#" className="prime-bttn">
                      Subscribe Now
                    </a>
                    <div className="toltip-block">
                      <div className="toltip-innerblock">
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
            <div className="blog-subscribe-block-right">
              <div className="blog-pluto500-left position-relative">
                <h3>Pluto 500</h3>
                <p>
                  A digital asset securities exchange platform. Fast and secure
                  way to exchange and purchase 100+ cryptocurrencies & Crypto
                  Securities ,24/7 live-chat support. Designed with additional
                  layer of security, e.g, an offline cold wallet ,safe storage
                  for crypto assets.{" "}
                </p>
                <div className="mt-2 d-flex">
                  <div className="tooltip-hover">
                    <a href="#" className="prime-bttn black-border">
                      See Full Case Study
                    </a>
                    <div className="toltip-block">
                      <div className="toltip-innerblock">
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
                <div className="blog-link">
                  <img src={img_link} alt="link" className="img-fluid" />
                </div>
              </div>
              <div className="blog-pluto500-right">
                <img
                  src={img_pluto500img}
                  alt="plut500"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="custom-container">
            <div className="blog-pluto-panel">
              <div className="blog-pluto-panel-left">
                <div className="blog-putoclear">
                  <div className="blog-putoclear-lft position-relative">
                    <h3>PlutoClear</h3>
                    <p>
                      A Digital Asset Securities depository holds securities of
                      investors in digitalized(tokenized), electronic
                      form.Depository interfaces with customers through
                      interactive dashboard Called Atlas Platform. We enable our
                      customers to systematically monitor securities clearing &
                      settlement execution and compare securities.
                    </p>
                    <div className="mt-2 d-flex">
                      <div className="tooltip-hover">
                        <a href="#" className="prime-bttn black-border">
                          See Full Case Study
                        </a>
                        <div className="toltip-block">
                          <div className="toltip-innerblock">
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
                    <div className="blog-link">
                      <img src={img_link} alt="link" className="img-fluid" />
                    </div>
                  </div>
                  <div className="blog-putoclear-right">
                    <img
                      src={img_plutoclearimg}
                      alt="plutoclear-img"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="blog-liquidcash">
                  <div className="blog-liquidcash-left">
                    <div className="blog-liquidcash-left-img position-relative">
                      <img
                        src={img_liquidcash}
                        alt="liquidcash"
                        className="img-fluid"
                      />
                      <div className="blog-link2">
                        <img src={img_link} alt="link" className="img-fluid" />
                      </div>
                    </div>
                    <div className="blog-liquidcash-lft-txt position-relative">
                      <h3>LiquidCash</h3>
                      <p>
                        A private investor portal equipped with an automated
                        aggregation of financial data and visualization tools,
                        designed to provide a full overview of an investment
                        portfolio, generate mid-year and year-end reports, and
                        support secure integration with a private Blockchain
                        network and reporting services.
                      </p>
                      <div className="mt-2 d-flex">
                        <div className="tooltip-hover">
                          <a href="#" className="prime-bttn black-border">
                            See Full Case Study
                          </a>
                          <div className="toltip-block">
                            <div className="toltip-innerblock">
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
                  <div className="blog-liquidcash-right">
                    <h3 className="blog-experties">My Expertise</h3>
                    <div className="blog-executive-leader">
                      <div className="blog-executive-leader-left">
                        <h3>Executive Leadership Competencies</h3>
                        <ul>
                          <li>Growth Initiatives </li>
                          <li>P&L Management </li>
                          <li>Business/Financial Planning </li>
                          <li>Due Diligence & Negotiations </li>
                          <li>Strategic Planning </li>
                          <li>Sales,Marketing & Business </li>
                          <li>Development </li>
                          <li>Client Relationship </li>
                          <li>Risk Analysis </li>
                        </ul>
                      </div>
                      <div className="blog-executive-leader-right">
                        <h3>Software Business Operations Competencies </h3>
                        <ul>
                          <li>Software Development Lifecycle (SDLC) </li>
                          <li>Technical Architecture </li>
                          <li>Agile Project Management</li>
                          <li>
                            Enterprise Blockchain SaaS Platform Design &
                            Development
                          </li>
                          <li>Tech Team Building and Development</li>
                          <li>Product User Experience (UX) </li>
                          <li>Full Lifecycle Product Management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-pluto-panel-right">
                <div className="blog-bricktrade position-relative">
                  <h3>Bricktrade</h3>
                  <p>
                    Online property marketplace that connects Property
                    Developers, Property Brokers, Estate Agents , and the
                    investors . The definite feature of this marketplace is
                    automation of information exchange and key business
                    processes such as customer acquisition, underwriting ,claims
                    management ,capital and more.
                  </p>
                  <div className="mt-2 d-flex">
                    <a
                      href="/case-study/Bricktrade"
                      className="prime-bttn black-border"
                    >
                      See Full Case Study
                    </a>
                  </div>
                  <div className="blog-link2">
                    <img src={img_link} alt="link" className="img-fluid" />
                  </div>
                </div>
                <div className="blog-bricktrade-bottom">
                  <div className="blog-home-img1">
                    <img
                      src={img_bricktradeimg}
                      alt="bricktrade-img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="blog-home-img2">
                    <img
                      src={img_bricktrade2img}
                      alt="bricktrade-img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-container">
            <div className="blog-pluto-hyperionnt">
              <div className="blog-pluto-hyperionnt-lft position-relative">
                <div className="pluto-hyperionnt-slide">
                  <div className=" ">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          src={img_hyperont_img}
                          alt="case study"
                          className="img-fluid"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={img_hyperont_img1}
                          alt="case study"
                          className="img-fluid"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
                <div className="blog-link">
                  <img src={link} alt="link" className="img-fluid" />
                </div>
              </div>
              <div className="blog-pluto-hyperionnt-right">
                <h3>HyperianNet</h3>
                <p>
                  Enterprise Blockchain Network that enables issuing securities
                  flexibly and securely with compliance via a private
                  blockchain-based infrastructure. The infrastructure is
                  continuously supported by a nimble technology team and is
                  therefore completely maintenance-free for users .
                  <br />
                  <br />
                  Users benefiting from a web-based{" "}
                  <a href="">Hyperion Labratory</a> for learning & tetsting
                  asset tokenization or integrate our tokenization API directly
                  to your system.
                  <br />
                  <br />
                  In addition, Hyperion provides a free block explorer,{" "}
                  <a href="">Hyperion Explorer</a> which allows users or any
                  third party to easily query the entire Hyperion blockchain
                  information, maximizing the spirit of a fair and transparent
                  blockchain.
                </p>
                <p></p>
                <p></p>
                <div className="mt-2 d-flex">
                  <div className=" tooltip-hover">
                    <a className="prime-bttn black-border">
                      See Full Case Study
                    </a>
                    <div className="toltip-block">
                      <div className="toltip-innerblock">
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
        </div>
      </>
    );
  }
}

export default Home;
