import React from "react";
import OtherHeader from "./components/Common/OtherHeader";

const Chevronsright = "/images/chevrons-right.png";
const Tick = "/images/tick.png";
const tickwhite = "/images/tickwhite.png";
const Arw = "/images/arw.png";
const Arw2 = "/images/arw2.png";
const Info = "/images/info.png";
const Link2 = "/images/link2.png";
const Tablelogo = "/images/table-logo.png";
const MkTablelogo = "/images/mktablelogo.png";
const Arrow = "/images/arrow.png";
class CoachingConsultingFees extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
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
        <div className="body-bg">
          <OtherHeader />
          <div class="custom-container">
            <div class="row">
              <div class="head-top-breadcrumb">
                <span>
                  <a href="/">Home</a>
                </span>
                <span class="chevrons-right">
                  <img src={Chevronsright} alt="chevrons right" />
                </span>
                <span class="selected-list-item">
                  Coaching & Consulting Fees
                </span>
              </div>
            </div>
          </div>
          <div class="custom-container">
            <div class="row">
              <div class="mt-2 fees-deatails-tbl">
                <h3>Value Proposition </h3>
                <div class="fees-table">
                  <div class="fees-tableHeading">
                    <div class="fees-tableCell">
                      <div class="">
                        Consultancy <br />
                        Services{" "}
                      </div>
                    </div>
                    <div class="fees-tableCell">
                      <div class="feetablecell-wd">
                        Independent <br />
                        contractors{" "}
                      </div>
                    </div>
                    <div class="fees-tableCell">
                      <div class="feetablecell-wd">
                        Small and mid
                        <br /> sized technology
                        <br /> player{" "}
                      </div>
                    </div>
                    <div class="fees-tableCell">
                      <div class="feetablecell-wd">
                        Strategy <br />
                        Boutiques
                      </div>{" "}
                    </div>
                    <div class="fees-tableCell">
                      <div class="top-logog">
                        <img src={MkTablelogo} alt="logo" />
                      </div>
                    </div>
                    <div class="fees-tableCell">
                      <div class="feetablecell-wd">
                        Global <br />
                        Technology Firms{" "}
                      </div>
                    </div>
                    <div class="fees-tableCell">
                      <div class="feetablecell-wd">Big Four </div>
                    </div>
                  </div>
                  <div class="fees-tableBody">
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Strategic business
                            <br /> idea validation
                          </div>
                        </div>
                        <div class="fees-tableCell borderradius-topleft">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell borderradius-topright">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Business <br />
                            Ecosystem Map
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Plot the journey
                            <br />
                            before starting
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Product features
                            <br />
                            and function analysis
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Be agile and
                            <br />
                            user-centric
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Partner based on <br />
                            shared values and trust
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Application <br />
                            UX/UI process
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Smart KYC/AML on-boarding <br />
                            process design
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Product development <br />& delivery
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Software test <br />
                            processes
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Platform support <br />& maintenance
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Blockchain DAppS <br />
                            design & development
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Financial asset <br />
                            tokenization
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Enterprise data <br />
                            processing platform
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">RESTful API design</div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Database schema <br />
                            design
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            UML and data <br />
                            modeling
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Penetration Testing: <br />
                            Cyber Security Assessments
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box"></div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Outsourcing custom <br />
                            software development
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-tableRow">
                      <div class="fees-tableRowHeader">
                        <div class="fees-tableCell">
                          <div class="fees-column-box1">
                            Invest in resources that <br />
                            make the change stick
                          </div>
                        </div>
                        <div class="fees-tableCell borderradius-bottmleft">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={tickwhite} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                        <div class="fees-tableCell borderradius-bottmright">
                          <div class="fees-column-box">
                            <img src={Tick} alt="tick" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fees-table-price-bttm">
                      <span>£</span>
                      <span>
                        <img src={Arw} alt="arrow" class="img-fluid" />
                      </span>
                      <span>Price</span>
                      <span>
                        <img src={Arw2} alt="arrow" class="img-fluid" />
                      </span>
                      <span>££££</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6 col-lg-12 p-0 d-flex">
                <div class="fees-structure-block tech-feebg">
                  <h3>What are my coaching & consulting fees structure ?</h3>
                  <p>
                    Same fixed fee structure doesn't apply across all clients,so
                    you don’t have too be worried . The goals of a fee structure
                    are to make sure that my clients feel comfortable paying for
                    the work I do for them , so it’s okay to adjust structures
                    based on client’s needs or by project.
                  </p>
                  <p>
                    Fee structure could vary from hourly, to daily, to
                    project-based prices. It is worth considering how long you
                    wish to work with me , as well as how frequently.
                  </p>
                  <p>
                    My consulting fees are based on the type of consulting work
                    and client’s requirements . A number of factors influence
                    that, including time , frequency , type and the scope of
                    client’s project.
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-12">
                <div class="row">
                  <div class="col-lg-6 p-0">
                    <div class="fees-structure-right-block2 tech-fee">
                      <div class="advisory-block-num">1</div>
                      <h3>An hourly rate</h3>
                      <p>
                        In this time-based arrangement, client is billed by the
                        number of hours that I have worked.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 p-0">
                    <div class="fees-structure-right-block2 tech-dark-green">
                      <div class="advisory-block-num">2</div>
                      <h3>A project-based rate</h3>
                      <p>
                        Before the project begins, Client and I agree on a fixed
                        rate based on the project.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 p-0">
                    <div class="fees-structure-right-block white-bg">
                      <div class="advisory-block-numb">3</div>
                      <h3>Monthly Retainers</h3>
                      <p>
                        Recurring revenue where you either pays for my work or
                        pays for access to me .
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 p-0">
                    <div class="fees-structure-right-block white-bg">
                      <ul>
                        <li>
                          <h3>Pay for Work Retainer</h3>
                          <p>
                            The Pay for Work model is really where I provide
                            ongoing work for my client and get paid for it
                          </p>
                        </li>
                        <li class="mb-4">
                          <h3>Pay for Access Retainer</h3>
                          <p>
                            Client paying to be able to have access to me – my
                            knowledge, experience and expertise.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3 col-lg-6 p-0">
                <div class="fees-structure-right-block2 tech-dark-blue">
                  <div class="fees-custom-hight">
                    <div class="advisory-block-num">4</div>
                    <h3>A Combination fee</h3>
                    <p>
                      You and I set a fixed rate based on the project as well as
                      time spent on the project.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 p-0">
                <div class="fees-structure-right-block white-bg">
                  <div class="fees-custom-hight">
                    <div class="advisory-block-numbe">5</div>
                    <h3>A performance-based rate</h3>
                    <p>
                      you are billed based on the performance or results of my
                      work excluding my based rate .
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 p-0">
                <div class="fees-structure-right-block2 tech-light-green">
                  <div class="fees-custom-hight">
                    <div class="advisory-block-num">6</div>
                    <h3>Equity</h3>
                    <p>
                      Working for shares in your business instead of a fixed
                      amount of money.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 p-0">
                <div class="fees-structure-right-block1 tech-bgfee">
                  <h3>
                    I design & build beautiful & reliable technology platforms
                  </h3>
                  <p>
                    I strongly believe that communication, trust & Transparency
                    are the essential elements of successful business
                    relationship.
                  </p>
                  <div class="fees-jjurny-block">
                    <h3>Ready for the Journey ? </h3>
                    <div class="fees-jjurny-btn">
                      <span class="mr-md-3">
                        <a href="/contact-me" class="btn fees-jjurny-btn">
                          Contact me{" "}
                        </a>
                      </span>
                      <span>
                        <a href="/Portfolio" class="btn fees-jjurny-btn">
                          My Portfolio
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 p-0">
                {this.state.showhourlycto ? (
                  <div class="fees-cto-details-block tech-lightbg">
                    <p class="fees-cto-txt-line1">
                      Average Interim Chief Technology Officer (CTO) ,
                      (CTO-on-demand, virtual CTO or CTO as-a-service ) Salary
                      in London,United Kingdom
                    </p>
                    <p class="fees-cto-txt-line2">£130 </p>
                    <p class="fees-cto-txt-line3">
                      <span> Hourly Rate</span>
                      <span class="fees-hourly-clr3">
                        <a
                          onClick={() => {
                            this.setState({
                              showhourlycto: !this.state.showhourlycto,
                            });
                          }}
                        >
                          Avg. Salary
                        </a>
                      </span>
                    </p>
                    <div class="fees-startup-link">
                      <img src={Link2} alt="link" class="img-fluid" />
                    </div>
                  </div>
                ) : (
                  <div class="fees-cto-details-block tech-lightbg">
                    <p class="fees-cto-txt-line1">
                      Average Interim Chief Technology Officer (CTO) ,
                      (CTO-on-demand, virtual CTO or CTO as-a-service ) Salary
                      in London,United Kingdom
                    </p>
                    <p class="fees-cto-txt-line2">
                      £150,000 <span>p.a</span>{" "}
                    </p>
                    <p class="fees-cto-txt-line3">
                      <span>Avg. Salary</span>
                      <span class="fees-hourly-clr3">
                        <a
                          onClick={() => {
                            this.setState({
                              showhourlycto: !this.state.showhourlycto,
                            });
                          }}
                        >
                          Show Hourly Rate
                        </a>
                      </span>
                    </p>
                    <div class="fees-startup-link">
                      <img src={Link2} alt="link" class="img-fluid" />
                    </div>
                  </div>
                )}
                <div class="fees-cto-details tech-feebgann">
                  <h3>
                    {" "}
                    Chief Technology Officer (CTO) compensation in London, Uk
                    with 20 years of experience.{" "}
                  </h3>
                  <div class="fees-cto-table table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Per annum</th>
                          <th>
                            EXPERANCE<span>PAY RANGE</span>{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            BASE SALARY
                            <span class="fees-popup ml-2">
                              <img src={Info} alt="info" />
                              <div class="fees-popover">
                                This is a typical chief Technology Officer (CTO)
                                Salary in London with 20 years of experince.
                              </div>
                            </span>
                          </td>
                          <td>£150,000</td>
                          <td>
                            <div class="fees-val-top">
                              <span>80%</span>
                              <span>120%</span>
                            </div>
                            <div class="fees-progress-bar">
                              <div class="fees-innerprogress-bar"></div>
                            </div>
                            <div class="fees-val-bottom">
                              <span>110%</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Bonus</td>
                          <td>£30,000</td>
                          <td>
                            <div class="fees-val-top">
                              <span>80%</span>
                              <span>120%</span>
                            </div>
                            <div class="fees-progress-bar">
                              <div class="fees-innerprogress-bar"></div>
                            </div>
                            <div class="fees-val-bottom">
                              <span>110%</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Profit Sharing</td>
                          <td>£20,000</td>
                          <td>
                            <div class="fees-val-top">
                              <span>80%</span>
                              <span>120%</span>
                            </div>
                            <div class="fees-progress-bar">
                              <div class="fees-innerprogress-bar"></div>
                            </div>
                            <div class="fees-val-bottom">
                              <span>110%</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Commission</td>
                          <td>£25,000</td>
                          <td>
                            <div class="fees-val-top">
                              <span>80%</span>
                              <span>120%</span>
                            </div>
                            <div class="fees-progress-bar">
                              <div class="fees-innerprogress-bar"></div>
                            </div>
                            <div class="fees-val-bottom">
                              <span>110%</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Total cash compensation
                            <span class="fees-popup ml-2">
                              <img src={Info} alt="info" />
                              <div class="fees-popover">
                                TCC combines base anuual salary or hourly wage
                                ,bonuses, profit sharing ,tips, comission, and
                                other forms of cash earnings, as applicable. It
                                does not include equity (Stock) compensation,
                                cash value of retirement benefits , or value of
                                other non-cash benefits (e.g., healthcare).
                              </div>
                            </span>
                          </td>
                          <td>£225,000</td>
                          <td>
                            <div class="fees-val-top">
                              <span>80%</span>
                              <span>120%</span>
                            </div>
                            <div class="fees-progress-bar">
                              <div class="fees-innerprogress-bar"></div>
                            </div>
                            <div class="fees-val-bottom">
                              <span>110%</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="3" class="fees-bttm-total">
                            <div>£225,000</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 p-0">
                {this.state.showhourlyvp ? (
                  <div class="fees-cto-details-block tech-dark-blue">
                    <p class="fees-cto-txt-line1">
                      Average Vice President (VP)of engineering , (VP-on-demand,
                      virtual VP or VP as-a-service ) Salary in London,United
                      Kingdom
                    </p>
                    <p class="fees-cto-txt-line2">£106 </p>
                    <p class="fees-cto-txt-line3">
                      <span>Hourly Rate</span>
                      <span class="fees-hourly-clr4">
                        <a
                          onClick={() => {
                            this.setState({
                              showhourlyvp: !this.state.showhourlyvp,
                            });
                          }}
                        >
                          Avg. Salary
                        </a>
                      </span>
                    </p>
                    <div class="fees-startup-link">
                      <img src={Link2} alt="link" class="img-fluid" />
                    </div>
                  </div>
                ) : (
                  <div class="fees-cto-details-block tech-dark-blue">
                    <p class="fees-cto-txt-line1">
                      Average Vice President (VP)of engineering , (VP-on-demand,
                      virtual VP or VP as-a-service ) Salary in London,United
                      Kingdom
                    </p>
                    <p class="fees-cto-txt-line2">
                      £125,000 <span>p.a</span>{" "}
                    </p>
                    <p class="fees-cto-txt-line3">
                      <span>Avg. Salary</span>
                      <span class="fees-hourly-clr4">
                        <a
                          onClick={() => {
                            this.setState({
                              showhourlyvp: !this.state.showhourlyvp,
                            });
                          }}
                        >
                          Show Hourly Rate
                        </a>
                      </span>
                    </p>
                    <div class="fees-startup-link">
                      <img src={Link2} alt="link" class="img-fluid" />
                    </div>
                  </div>
                )}
                <div class="fees-cto-details tech-feevp">
                  <h3>
                    {" "}
                    Vice President (VP) of engineering compensation in London,UK
                    with 20 years of experience.{" "}
                  </h3>
                  <div class="fees-cto-table table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Per annum</th>
                          <th>
                            EXPERANCE<span>PAY RANGE</span>{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            BASE SALARY
                            <span class="fees-popup ml-2">
                              <img src={Info} alt="info" />
                              <div class="fees-popover">
                                This is a typical Vice President of engineering
                                (VP) Salary in London with 20 years of
                                experince.
                              </div>
                            </span>
                          </td>
                          <td>£125,000</td>
                          <td>
                            <div class="fees-val-top2">
                              <span>80%</span>
                              <span>120%</span>
                            </div>
                            <div class="fees-progress-bar2">
                              <div class="fees-innerprogress-bar2"></div>
                            </div>
                            <div class="fees-val-bottom2">
                              <span>110%</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Bonus</td>
                          <td>£30,000</td>
                          <td>
                            <div class="fees-val-top2">
                              <span>80%</span>
                              <span>120%</span>
                            </div>
                            <div class="fees-progress-bar2">
                              <div class="fees-innerprogress-bar2"></div>
                            </div>
                            <div class="fees-val-bottom2">
                              <span>110%</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Profit Sharing</td>
                          <td>£20,000</td>
                          <td>
                            <div class="fees-val-top2">
                              <span>80%</span>
                              <span>120%</span>
                            </div>
                            <div class="fees-progress-bar2">
                              <div class="fees-innerprogress-bar2"></div>
                            </div>
                            <div class="fees-val-bottom2">
                              <span>110%</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Commission</td>
                          <td>£20,000</td>
                          <td>
                            <div class="fees-val-top2">
                              <span>80%</span>
                              <span>120%</span>
                            </div>
                            <div class="fees-progress-bar2">
                              <div class="fees-innerprogress-bar2"></div>
                            </div>
                            <div class="fees-val-bottom2">
                              <span>110%</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Total cash compensation
                            <span class="fees-popup ml-2">
                              <img src={Info} alt="info" />
                              <div class="fees-popover">
                                TCC combines base anuual salary or hourly wage
                                ,bonuses, profit sharing ,tips, comission, and
                                other forms of cash earnings, as applicable. It
                                does not include equity (Stock) compensation,
                                cash value of retirement benefits , or value of
                                other non-cash benefits (e.g., healthcare).
                              </div>
                            </span>
                          </td>
                          <td>£195,000</td>
                          <td>
                            <div class="fees-val-top2">
                              <span>80%</span>
                              <span>120%</span>
                            </div>
                            <div class="fees-progress-bar2">
                              <div class="fees-innerprogress-bar2"></div>
                            </div>
                            <div class="fees-val-bottom2">
                              <span>110%</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="3" class="fees-bttm-total">
                            <div>£195,000</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default CoachingConsultingFees;
