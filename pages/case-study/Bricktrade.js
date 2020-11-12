import Link from "next/link";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const case_BT_img1 = "/images/case-BT-img1.png";
const case_BT_img2 = "/images/case-BT-img2.png";
const case_BT_img3 = "/images/case-BT-img3.png";
const slider_img1 = "/images/slider-img1.png";
const slider_img2 = "/images/slider-img2.png";
const slider_img3 = "/images/slider-img3.png";
const slider_img4 = "/images/slider-img4.png";
const slider_img5 = "/images/slider-img5.png";
const mobile_img1 = "/images/mobile-img1.png";
const mobile_img2 = "/images/mobile-img2.png";
const mobile_img3 = "/images/mobile-img3.png";
const mobile_img4 = "/images/mobile-img4.png";
const chevrons_right = "/images/chevrons-right.png";
import OtherHeader from "../components/Common/OtherHeader";

const Bricktrade = () => {
  return (
    <>
      <div class="inner-body">
        <OtherHeader />
        <div class="custom-container">
          <div class="row">
            <div class="head-top-breadcrumb">
              <span>
                <a href="#">Home</a>
              </span>
              <span class="chevrons-right">
                <img src={chevrons_right} alt="chevrons right" />
              </span>
              <span class="selected-list-item">Case study - Bricktrade </span>
            </div>
          </div>
        </div>
        <div class="custom-container">
          <div class="row">
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-BT-block1 adv-red-bg">
                <h2>Objective</h2>
                <p>
                  Building a most intelligent real estate platform on the
                  market.A Saas platform Where real estate agents , developers
                  and invetsors search for investment oppurtunities together.
                  The Sourced Capital Property backed ISA is an Innovative
                  Finance ISA and allows investors to receive interest tax-free.{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-BT-block-right">
                <img src={case_BT_img1} alt="case study" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-BT-block-left">
                <img src={case_BT_img2} alt="case study" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-BT-block2 casestudy-bg-color1">
                <h2>Solution</h2>
                <ul>
                  <li>
                    Leverage City-Wide Buyer Demand Insights to Win
                    Listings"Insure" Your Online Marketing.
                  </li>
                  <li>
                    The platform enables property comparison feature and
                    displays property listings side-by-side.
                  </li>
                  <li>Maximize Agent Adoption</li>
                  <li>Easily Add Your Leads and Contacts</li>
                  <li>
                    Rapid Listing Alerts (Alerts are customized for every buyer)
                  </li>
                  <li>Notify your clients of new listings faster</li>
                  <li>
                    Full-browse search experience keeps clients inside a safe
                    haven for collaboration
                  </li>
                  <li>
                    Tokenize real-estate asset to offer fractional shares{" "}
                  </li>
                  <li>
                    Works beautifully on devices of all shapes and sizes. Plus,
                    mobile apps for iOS and Android.
                  </li>
                  <li>Integrate with best-in-class third party apps</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-BT-block2 casestudy-bg-color2">
                <h2>Benefits</h2>
                <ul>
                  <li class="mb-4">
                    Clients portfolio is powered by high-quality, resilient
                    Blockchain technology.
                  </li>
                  <li class="mb-4">
                    Invetors returns are maximized through low-fee approach.
                  </li>
                  <li class="mb-4">
                    Bricktrade investor portfolios have the potential to
                    generate dividends on a quarterly basis while their shares
                    also grow in value over time.
                  </li>
                  <li class="mb-4">
                    Brick Trade core system is integrated with liquidity
                    provider such as digital asset exchanges (e,g Archax ,Gemini
                    and opensource). Multi-asset liquidity solution comes
                    equipped with advanced capabilities and features, helping
                    Bricktrade clients to maximise real estate asset offering
                    ,diversify revenue streams and redeem shares at any time
                    with a safe, secure and reliable pricing.
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-BT-block-left2">
                <img src={case_BT_img3} alt="case study" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-4 p-md-0">
              <div class="casestudy-BT-application-process startup-color1">
                <h2>Borrower Application Process</h2>
                <p>
                  We built a rigorous 9 stage application process which all
                  potential projects must follow in order to be listed on
                  Bricktrade platform.
                </p>
                <ul>
                  <li>Clinet & Company KYC</li>
                  <li>Application</li>
                  <li>Initial Meeting</li>
                  <li>Due Diligence</li>
                  <li>Valuation</li>
                  <li>Project Listed in the marketplace</li>
                  <li>Capital raised and loan offer</li>
                  <li>Legals Signed</li>
                  <li>Principal Sign Off</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 p-md-0">
              <div class="casestudy-BT-delivered-block ">
                <h2>What We Delivered.</h2>
                <h3>We provided the following services to deliver success</h3>
                <span class="bottm-line"></span>
                <ul>
                  <li>UX / UI Design</li>
                  <li>Design Thinking</li>
                  <li>Design & Development</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 p-md-0">
              <div class="casestudy-BT-key-highlight startup-color3">
                <h2>Key Highlights</h2>
                <ul>
                  <li>
                    Buld real state asset portfolios and view a detailed log of
                    all your transactions
                  </li>
                  <li>
                    Grow a well-rounded portfolio that’s aligned with your
                    goals.
                  </li>
                  <li>
                    One-of-a-kind investments paired with unparalleled service.
                  </li>
                  <li>Receive portfolio change and stock price alerts</li>
                  <li>Receive personalised alerts & daily summaries </li>
                  <li>
                    Track your stocks’ performance and compare against real
                    estate sector
                  </li>
                  <li>
                    Create watchlist to monitor potential investment
                    oppurtunities at a glance
                  </li>
                  <li>Smarter diversification</li>
                  <li>Institutional quality without the high fees</li>
                  <li>Flexible investment minimums</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-12 p-md-0">
              {/* <div class="casestudy-BT-slider-block">
              <div class="casestudy-BT-slider-wrapper">
                <div class="casestudy-BT-slider-img-block">
                  <div class="mySlides fade">
                    <img src={slider_img1} alt="case study" class="img-fluid" />
                  </div>
                  <div class="mySlides fade">
                    <img src={slider_img2} alt="case study" class="img-fluid" />
                  </div>
                  <div class="mySlides fade">
                    <img src={slider_img3} alt="case study" class="img-fluid" />
                  </div>
                  <div class="mySlides fade">
                    <img src={slider_img4} alt="case study" class="img-fluid" />
                  </div>
                  <div class="mySlides fade">
                    <img src={slider_img5} alt="case study" class="img-fluid" />
                  </div>
                  <div class="w-100 text-center">
                    <span class="dot" onclick="currentSlide(0)"></span>
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                    <span class="dot" onclick="currentSlide(4)"></span>
                  </div>
                </div>
              </div>
            </div> */}
              <div class="casestudy-BT-slider-block">
                <div class="casestudy-BT-slider-wrapper">
                  <div class="casestudy-BT-slider-img-block">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          src={slider_img1}
                          alt="case study"
                          class="img-fluid"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={slider_img2}
                          alt="case study"
                          class="img-fluid"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={slider_img3}
                          alt="case study"
                          class="img-fluid"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={slider_img4}
                          alt="case study"
                          class="img-fluid"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={slider_img5}
                          alt="case study"
                          class="img-fluid"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 p-md-0">
              <div class="casestudy-BT-mobl-block">
                <ul>
                  <li>
                    <img src={mobile_img1} alt="case study" class="img-fluid" />
                  </li>
                  <li>
                    <img src={mobile_img2} alt="case study" class="img-fluid" />
                  </li>
                  <li>
                    <img src={mobile_img3} alt="case study" class="img-fluid" />
                  </li>
                  <li>
                    <img src={mobile_img4} alt="case study" class="img-fluid" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-12 p-md-0">
              <div class="casestudy-BT-Pmanagement-block">
                <div class="casestudy-BT-Pmanagement-innerblock">
                  <h2>Property Management</h2>
                  <p>
                    Software to manage properties, finances, operations with the
                    ability to visualize required data in a convenient
                    dashboard.
                  </p>
                  <ul>
                    <li>Portals for owners, landlords, and tenants</li>
                    <li>Properties ROI management systems</li>
                    <li>Custom dashboards and data visualization</li>
                    <li>Mortgage calculators</li>
                  </ul>
                  <div>
                    <Link href="/contact-me">
                      <button className="cs-bricktrade-btn">
                        Estimate a project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bricktrade;
