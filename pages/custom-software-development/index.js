import React, { Component } from 'react';
import Link from 'next/link';
import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import OtherHeader from '../components/Common/OtherHeader';

const Listbullet = 'images/list-bullet.png';
const Listbulletblack = 'images/list-bullet-black.png';
const Link2 = 'images/link2.png';
const Custom5 = 'images/custom5.png';
const Custom6 = 'images/custom6.png';
const Custom7 = 'images/custom7.png';
const Custom8 = 'images/custom8.png';
const Chevronsright = 'images/chevrons-right.png';
const Projectsetup = 'images/project-setup.svg';
const Logo123 = 'images/logo123.png';

class CustomSoftware extends Component {
  render() {
    const { scrollPosition } = this.props;
    return (
      <>
        <LazyLoadComponent>
          <div class="body-bg">
            <OtherHeader />
            <div class="custom-container">
              <div class="row">
                <div class="head-top-breadcrumb">
                  <span>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </span>
                  <span class="chevrons-right">
                    <LazyLoadImage
                      src={Chevronsright}
                      alt="chevrons right"
                      effect="blur"
                      class="img-fluid"
                      scrollPosition={scrollPosition}
                    />
                  </span>
                  <Link href="/custom-software-development">
                    <span class="selected-list-item">
                      Custom Software Development{' '}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="custom-container">
              <div class="row">
                <div class="col-xl-6 col-lg-12 p-md-0 d-flex">
                  <div class="colaboration-block-new">
                    <div>
                      <LazyLoadImage
                        alt="app-dev"
                        effect="blur"
                        class="img-fluid w-100"
                        src={Projectsetup}
                      />
                    </div>

                    <div class="text-7">
                      <span>
                        Once you start collaboration with me, you get instant
                        access to my team technology skillset, ready‑to‑use IT
                        infrastructure and mature software development
                        processes.
                      </span>
                    </div>
                  </div>
                </div>

                <div class="col-xl-6 col-lg-12">
                  <div class="row">
                    <div class="col-md-6 p-md-0">
                      <div class="software-develop-new">
                        <h3>Holistic transformation </h3>
                        <p>
                          New technologies have been at the center of
                          trends—from mobile-first consumer shopping preferences
                          to the promise of artificial intelligence in critical
                          decision making—that have reshaped the competitive
                          landscape and disrupted business models. For this
                          reason, companies need to be tech forward: technology
                          needs to drive the business.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6 p-md-0 d-flex">
                      <LazyLoadComponent>
                        <div class="centre-parent p-md-0 backimg"></div>
                      </LazyLoadComponent>
                    </div>
                    <div class="col-md-6 p-md-0">
                      <LazyLoadComponent>
                        <div class="centre-parent p-md-0 backimg1"></div>
                      </LazyLoadComponent>
                    </div>
                    <div class="col-md-6 p-md-0">
                      <div class="software-develop tcc-blue-bg">
                        <h3>Agile approach </h3>
                        <p>
                          Agile will become more prominent As the agile
                          methodology continues to permeate through
                          organisations in 2020, the finance department will
                          need to adapt to accommodate the change. Companies
                          need to embrace the shift away from a waterfall model
                          as part of a necessary strategy to speed up
                          innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <LazyLoadComponent>
                    <div class="centre-parent position-relative backimg6">
                      <h2>Customer</h2>
                      <div class="software-link">
                        <LazyLoadImage
                          alt="link"
                          effect="blur"
                          class="img-fluid w-100"
                          src={Link2}
                        />
                      </div>
                    </div>
                  </LazyLoadComponent>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <div class="centre-parent tcc-red-bg position-relative">
                    <ul class="software-dev-listblock">
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Demand recognition
                      </li>
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Scope definition
                      </li>
                    </ul>
                    <div class="software-link">
                      <LazyLoadImage
                        alt="link"
                        effect="blur"
                        class="img-fluid w-100"
                        src={Link2}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <div class="centre-parent position-relative">
                    <ul class="software-dev-listblock-new">
                      <li>
                        <span class="csd-block">
                          <img src={Listbulletblack} alt="list item" />
                        </span>
                        Candidates approval
                      </li>
                      <li>
                        <span>
                          <img src={Listbulletblack} alt="list item" />
                        </span>
                        Knowledge transfer
                      </li>
                    </ul>
                    <div class="software-link">
                      <LazyLoadImage
                        alt="link"
                        effect="blur"
                        class="img-fluid w-100"
                        src={Link2}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <div class=" centre-parent bg-dark-orange position-relative">
                    <ul class="software-dev-listblock">
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Deliverables acceptance
                      </li>
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        KPI control
                      </li>
                    </ul>
                    <div class="software-link">
                      <LazyLoadImage
                        alt="link"
                        effect="blur"
                        class="img-fluid w-100"
                        src={Link2}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <LazyLoadComponent>
                    <div class=" centre-parent position-relative backimg2">
                      <h2>Stage</h2>
                      <div class="software-link">
                        <LazyLoadImage
                          alt="link"
                          effect="blur"
                          class="img-fluid w-100"
                          src={Link2}
                        />
                      </div>
                    </div>
                  </LazyLoadComponent>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <LazyLoadComponent>
                    <div class=" centre-parent position-relative backimg3">
                      <h2>01 Preparation</h2>
                      <div class="software-link">
                        <LazyLoadImage
                          alt="link"
                          effect="blur"
                          class="img-fluid w-100"
                          src={Link2}
                        />
                      </div>
                    </div>
                  </LazyLoadComponent>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <LazyLoadComponent>
                    <div class=" centre-parent position-relative backimg4">
                      <h2>02 Setup </h2>
                      <div class="software-link">
                        <LazyLoadImage
                          alt="link"
                          effect="blur"
                          class="img-fluid w-100"
                          src={Link2}
                        />
                      </div>
                    </div>
                  </LazyLoadComponent>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0 ">
                  <LazyLoadComponent>
                    <div class=" centre-parent position-relative backimg5">
                      <h2>03 Operation </h2>
                      <div class="software-link">
                        <LazyLoadImage
                          alt="link"
                          effect="blur"
                          class="img-fluid w-100"
                          src={Link2}
                        />
                      </div>
                    </div>
                  </LazyLoadComponent>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <div class=" centre-parent color-white">
                    <img src={Logo123} class="img-fluid" alt="logo" />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <div class=" centre-parent tcc-young-bug-bg">
                    <ul class="software-dev-listblock">
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Requirements analysis
                      </li>
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Expertise mapping
                      </li>
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Process definition
                      </li>
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Roadmap development
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <div class="centre-parent tcc-white-bg">
                    <ul class="software-dev-listblock-new">
                      <li>
                        <span>
                          <img src={Listbulletblack} alt="list item" />
                        </span>
                        Core team setup
                      </li>
                      <li>
                        <span>
                          <img src={Listbulletblack} alt="list item" />
                        </span>
                        Knowledge acquisition
                      </li>
                      <li>
                        <span>
                          <img src={Listbulletblack} alt="list item" />
                        </span>
                        Environment setup
                      </li>
                      <li>
                        <span>
                          <img src={Listbulletblack} alt="list item" />
                        </span>
                        Methodology adjustment
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 p-md-0">
                  <div class=" centre-parent tcc-lightoffblue1-bg">
                    <ul class="software-dev-listblock">
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Progress reporting
                      </li>
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Team adjustment
                      </li>
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Performance optimization
                      </li>
                      <li>
                        <span>
                          <img src={Listbullet} alt="list item" />
                        </span>
                        Knowledge accumulation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-9 col-lg-6 p-md-0 d-flex">
                  <div class="tcc-blue-bg">
                    <div class="compilance-common-block">
                      <h2>Engineering</h2>
                      <h3>
                        <span>1</span>Compliance and Data
                      </h3>
                      <p>
                        IT compliance is merely an important part of meeting the
                        requirements of the business as closely as possible. For
                        any development team, whatever methodology it uses, it
                        is important to have a grasp of the application controls
                        and special requirements for data that are necessary for
                        compliance and the instrumentation of the application,
                        alongside the monitoring software, that is required for
                        security.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 p-md-0 d-flex software-bg-class lazy-loading-csd">
                  <LazyLoadImage
                    alt="list item"
                    effect="blur"
                    class="img-fluid w-100"
                    src={Custom5}
                  />
                  {/* <img   src={Custom5} /> */}
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-lg-6 p-md-0 d-flex software-bg-class lazy-loading-csd">
                  <LazyLoadImage
                    alt="list item"
                    effect="blur"
                    class="img-fluid w-100"
                    src={Custom6}
                  />
                </div>
                <div class="col-xl-9 col-lg-6 p-md-0 d-flex">
                  <div class="color-white">
                    <div class="compilance-common-block-new">
                      <h2>Engineering</h2>
                      <h3>
                        <span>2</span>Code quality
                      </h3>
                      <p>
                        Regardless of development methodologies, languages,
                        frameworks or tools, enforcing a high code quality is a
                        way to achieve faster and easier development, testing
                        and maintenance, which results in reduced costs of
                        software ownership. Finally, leveraging tools such as
                        SonarQube, CheckStyle, PMD, StyleCop,scrutinizer-ci and
                        Codacy to test and display a clear overview of the
                        quality of a project over time, and important details
                        about what and where the issues are.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-9 col-lg-6 p-md-0 d-flex">
                  <div class="tcc-young-bug-bg">
                    <div class="compilance-common-block">
                      <h2>Engineering</h2>
                      <h3>
                        <span>3</span>R&D
                      </h3>
                      <p>
                        The faster a company can ramp up development of a new
                        product, the more quickly it can begin to earn
                        significant revenues from the new product and recoup its
                        development investments. Rapid ramp-up enables a company
                        to penetrate the market quickly, gain broad market
                        acceptance, and begin to accumulate experience with high
                        scalability and achieving double digit growth. And,
                        finally, the faster ramp-up occurs, the faster critical
                        resources can be freed to support the next development
                        project.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 p-md-0 d-flex software-bg-class lazy-loading-csd">
                  <LazyLoadImage
                    alt="list item"
                    effect="blur"
                    class="img-fluid w-100"
                    src={Custom7}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-lg-6 p-md-0 d-flex software-bg-class lazy-loading-csd">
                  <LazyLoadImage
                    alt="list item"
                    effect="blur"
                    class="img-fluid w-100"
                    src={Custom8}
                  />
                </div>
                <div class="col-xl-9 col-lg-6 p-md-0 d-flex">
                  <div>
                    <div class="compilance-common-block-new">
                      {/* <h2>Engineering</h2> */}
                      <h3>
                        <span>4</span>Security
                      </h3>
                      <p>
                        Integrate software security activities into your
                        organization’s software development life cycle (SDLC)
                        from start to finish. Those activities should include
                        architecture risk analysis, static, dynamic, and
                        interactive application security testing, SCA, and pen
                        testing. Building security into your SDLC does require
                        time and effort at first. But fixing vulnerabilities
                        early in the SDLC is vastly cheaper and much faster than
                        waiting until the end. Ultimately, it reduces your
                        exposure to security risks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LazyLoadComponent>
      </>
    );
  }
}

export default trackWindowScroll(CustomSoftware);
