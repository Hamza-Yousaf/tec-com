import React, { Component } from "react";
import OtherHeader from "./components/Common/OtherHeader";
const chevrons_right = "/images/chevrons-right.png";
const consulting_pic1 = "/images/consulting-pic1.png";
const consulting_pic2 = "/images/consulting-pic2.png";
const consulting_pic3 = "/images/consulting-pic3.png";
const consulting_pic4 = "/images/consulting-pic4.png";
const consulting_pic5 = "/images/consulting-pic5.png";
const consulting_pic6 = "/images/consulting-pic6.png";
const consulting_pic7 = "/images/consulting-pic7.png";
const consulting_pic8 = "/images/consulting-pic8.png";
export default class TechnologyConsultingServices extends Component {
  render() {
    return (
      <>
        <div class="body-bg">
          <OtherHeader />
          <div className="custom-container">
            <div className="row">
              <div className="head-top-breadcrumb">
                <span>
                  <a href="/">Home</a>
                </span>
                <span className="chevrons-right">
                  <img src={chevrons_right} alt="chevrons right" />
                </span>
                <span className="selected-list-item">
                  Technology Consulting Services
                </span>
              </div>
            </div>
          </div>
          <div className="custom-container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 p-md-0">
                <div className="tech-consult--block white-bg">
                  <h2>
                    Strategic business <br />
                    idea validation
                  </h2>
                  <p>
                    Validation is designed to give you you reasonable certainty
                    your business will have a sustainable, growing, paying
                    audience in a matter of days or weeks, rather than wasting
                    months or years building a final product nobody will pay
                    for.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 p-md-0">
                <div className="tech-consulting--block mid-cust-img p-0">
                  <img
                    src={consulting_pic1}
                    alt="consulting"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 p-md-0">
                <div className="tech-consulting--block tech-blue-bg">
                  <h2>Business Ecosystem Map</h2>
                  <p>
                    Business ecosystems are the new unit of analysis for
                    strategic thinking; they offer fertile grounds for
                    innovation.An Ecosystem Map is the absolute best way to
                    quickly understand a client’s business environment. It shows
                    all the high-level exchanges of value between the client and
                    the groups with which it’s interacting.deally, an Ecosystem
                    Map should also include known pain points at all levels
                    (who, what, when, where, and how).
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 p-md-0">
                <div className="tech-consulting--block tech-green-bg">
                  <h2>Product features and function analysis </h2>
                  <p>
                    Features are the “tools” you use within a system to complete
                    a set of tasks or actions. Functionality is how those
                    features actually work to provide you with a desired
                    outcome. Market analysis goes beyond just assessing which of
                    your competitors have the features you’re interested in
                    building. The point is to quantify the value of those
                    features based on how they’ll help you differentiate your
                    product from that competition.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 p-md-0">
                <div className="tech-consulting--block cust-img-height p-0">
                  <img
                    src={consulting_pic2}
                    alt="consulting"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 p-md-0">
                <div className="tech-consulting--block cust-img-height p-0">
                  <img
                    src={consulting_pic3}
                    alt="consulting"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
                <div className="tech-consult--block white-bg">
                  <h2>
                    Plot the journey
                    <br /> before starting
                  </h2>
                  <p>
                    The systems modernization you need today is more than an
                    upgrade; you’re playing a new game with new rules, in which
                    you modernize not just the tools and functions, but the way
                    you do IT.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
                <div className="tech-consulting--block tech-light-bg">
                  <h2>
                    Be agile and <br />
                    user-centric{" "}
                  </h2>
                  <p>
                    Agile is a discipline that can be practiced using a
                    consistent, cyclical pattern of actions used to promote
                    maximized efficiency and simplicity for an entire
                    organization.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
                <div className="tech-consulting--block tech-dark-green">
                  <h2>
                    Partner based on
                    <br />
                    shared values and trust
                  </h2>
                  <p>
                    Your goal is to find companies that can deliver mutual
                    benefits and with which you can develop a working
                    relationship that involves mutual commitment and creative
                    collaboration as well as a fair deal.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
                <div className="tech-consult--block white-bg">
                  <h2>
                    Application <br />
                    UX/UI process{" "}
                  </h2>
                  <p>
                    UX/UI design is the process of solving a problem for user,
                    helping them achieve their goals. interaction-design
                    patterns found in a range of desktop applications, from
                    cloud-based webapps and Software as a Service (SaaS), as
                    well as native apps built for Windows and macOS.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
                <div className="tech-consulting--block tech-dark-blue">
                  <h2>Smart KYC/AML on-boarding process design</h2>
                  <p>
                    AML screening, onboarding and CLRM solutions help companies
                    tackle financial crime with smart technology.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 p-md-0">
                <div className="tech-consulting--block p-0">
                  <img
                    src={consulting_pic4}
                    alt="consulting"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div className="row">
                  <div className="col-md-6 p-md-0">
                    <div className="tech-consult--block white-bg">
                      <h2>
                        Product development <br />& delivery{" "}
                      </h2>
                      <p>
                        Launch new product and service propositions to market
                        with confidence. A thorough understanding of the
                        processes that support product and service development
                        will provide you with trust in how the delivery model
                        will work, how operations will support the new
                        proposition and why the customers will buy it.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-md-0">
                    <div className="tech-consulting--block tech-light-green">
                      <h2>
                        Software test
                        <br /> processes
                      </h2>
                      <p>
                        Testing is the process of evaluating a system or its
                        component(s) with the intent to find whether it
                        satisfies the specified requirements or not. In simple
                        words, testing is executing a system in order to
                        identify any gaps, errors, or missing requirements in
                        contrary to the actual requirements.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-md-0">
                    <div className="tech-consulting--block adv-red-bg">
                      <h2>
                        Blockchain DAppS <br />
                        design & development
                      </h2>
                      <p>
                        Fundamentally, tokenization is the process of converting
                        rights – or a unit of asset ownership – into a digital
                        token on a blockchain. Tokenization can be applied to
                        regulated financial instruments such as equities and
                        bonds, tangible assets such as real estate, precious
                        metals, and more.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-md-0">
                    <div className="tech-consult--block white-bg">
                      <h2>Financial asset tokenization</h2>
                      <p>
                        Fundamentally, tokenization is the process of converting
                        rights – or a unit of asset ownership – into a digital
                        token on a blockchain. Tokenization can be applied to
                        regulated financial instruments such as equities and
                        bonds, tangible assets such as real estate, precious
                        metals, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 p-md-0">
                <div className="col-12 p-0">
                  <div className="tech-consulting--block mid-cust-img p-0">
                    <img
                      src={consulting_pic5}
                      alt="consulting"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 p-md-0">
                <div className="col-12 p-0">
                  <div className="tech-consult--block white-bg">
                    <h2>Platform support & maintenance </h2>
                    <p>
                      Technical services include cost-effective maintenance and
                      support for high-volume Web sites, SaaS applications
                      including technical and user support, and ongoing content
                      updates from time to time.
                    </p>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="tech-consulting--block tech-lightbg">
                    <h2>Enterprise data processing platform</h2>
                    <p>
                      An Enterprise Data Platform (EDP) provides not only the
                      technical elements necessary for a data-driven
                      organization, but also the additional services that ensure
                      business users can consume the data stored within the EDP
                      to make better decisions to improve the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-12 p-md-0 d-flex">
                <div className="tech-consulting--block mbl-img-res p-0">
                  <img
                    src={consulting_pic6}
                    alt="consulting"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="row">
                  <div className="col-lg-12 p-md-0">
                    <div className="tech-consulting--block tech-greenlight">
                      <h2>RESTful API design</h2>
                      <p className="adv-coaching1">
                        Application Programming Interfaces (APIs) enable
                        communication between disparate software applications.
                        Developers can connect APIs from different companies and
                        services to achieve specific results. Popular API uses
                        include enabling the implementation of libraries and
                        frameworks across languages, specifying the interface
                        between an application and an operating system,
                        manipulating remote resources through protocols, and
                        defining the interface through which interactions happen
                        between a third-party and the applications that use its
                        assets
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 p-md-0">
                    <div className="tech-consult--block white-bg">
                      <h2>
                        Database schema <br />
                        design
                      </h2>
                      <p>
                        Design a schema logically based on business
                        requirements. This can be defined as building a logical
                        model. This design step will play an important part in
                        how the database is developed. These requirements can
                        translate into useful information that programmers can
                        utilize during the physical design of the database.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 p-md-0">
                    <div className="tech-consulting--block tech-lightbg">
                      <h2>
                        UML and data <br />
                        modeling
                      </h2>
                      <p>
                        The UML is popular among programmers,UML is effective
                        for high-level conceptual data modeling, and it can be
                        used in different types of UML diagrams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div className="row">
                  <div className="col-md-6 p-md-0">
                    <div className="tech-consulting--block tech-lightbg">
                      <h2>Penetration Testing: Cyber Security Assessments</h2>
                      <p>
                        Penetration testing, also called pen testing or ethical
                        hacking, is the practice of testing a computer system,
                        network or web application to find security
                        vulnerabilities that an attacker could exploitmmodo
                        consequat.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-md-0">
                    <div className="tech-consulting--block tech-dark-blue">
                      <h2>Outsourcing custom software development </h2>
                      <p>
                        Software development outsourcing essentially describes a
                        situation in which an organization chooses to hire a
                        third-party programmer to offer services related to
                        software development.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-md-0">
                    <div className="tech-consulting--block p-0">
                      <img
                        src={consulting_pic8}
                        alt="consulting"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 p-md-0">
                    <div className="tech-consult--block white-bg">
                      <h2>Invest in resources that make the change stick</h2>
                      <p>
                        Growth and change are inevitable in IT, but
                        transformational leadership can inspire workers to
                        embrace change by fostering a company culture of
                        accountability, ownership and workplace autonomy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 p-md-0">
                <div className="col-12 p-0">
                  <div className="tech-consulting--block mbl-img-res p-0">
                    <img
                      src={consulting_pic7}
                      alt="consulting"
                      className="img-fluid"
                    />
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
