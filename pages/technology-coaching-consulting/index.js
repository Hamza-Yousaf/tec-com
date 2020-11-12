import React from 'react';
import Link from 'next/link';
import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import OtherHeader from '../components/Common/OtherHeader';

const img_chevronsright = 'images/chevrons-right.png';
const img_appdev = 'images/app-dev.png';
const img_appdev1 = 'images/app-dev1.png';
const img_appdev2 = 'images/app-dev2.png';
const img_appdev3 = 'images/app-dev3.png';
const img_appdev5 = 'images/app-dev5.png';
const img_nissan = 'images/nissan.png';
const img_nike = 'images/nike.png';
const img_vm = 'images/vm.png';
const img_userpic = 'images/user-pic.png';
const img_whymeimg1 = 'images/whyme-img1.png';
const img_whymeimg2 = 'images/whyme-img2.png';
const img_whymeimg3 = 'images/whyme-img3.png';
const Slideimg1 = 'images/slide-img1.png';
const Slideimg2 = 'images/slide-img2.png';
const Slideimg3 = 'images/slide-img3.png';
const Slideimg4 = 'images/slide-img4.png';
const Slideimg5 = 'images/slide-img5.png';
const Slideimg6 = 'images/slide-img6.png';
const Slideimg7 = 'images/slide-img7.png';
const Slideimg8 = 'images/slide-img8.png';
const Slideimg9 = 'images/slide-img9.png';
const Slideimg10 = 'images/slide-img10.png';
const img_rightarrow = 'images/red-right-arrow.png';
const img_whiterightarrow1 = 'images/arrow-right-2.png';
const img_advdownarrow = 'images/Arrow-1.png';

class TechAdvisoryConsultancy extends React.Component {
  render() {
    const { scrollPosition } = this.props;
    return (
      <>
        <LazyLoadComponent>
          {' '}
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
                      src={img_chevronsright}
                      alt="chevrons right"
                      effect="blur"
                      class="img-fluid"
                      scrollPosition={scrollPosition}
                    />
                  </span>
                  <span class="selected-list-item">
                    Technology Coaching & Consulting
                  </span>
                </div>
              </div>
            </div>
            <div class="custom-container">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block tcc-zomp-bg">
                    <h2>
                      Application
                      <br />
                      Development
                    </h2>
                    <p>
                      Tailored application built around high availability,
                      usability and security.
                    </p>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block p-0">
                    <LazyLoadImage
                      alt="app-dev"
                      effect="blur"
                      class="img-fluid w-100"
                      src={img_appdev}                     
                    />

                    {/* <LazyLoad>
                  <img src={img_appdev} alt="app-dev" class="img-fluid" />
              </LazyLoad> */}
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block tcc-ocean-blue-bg">
                    <h2>
                      DevOps <br />
                      Enablement
                    </h2>
                    <p>
                      DevOps environments to streamline update delivery and
                      reinforce cross-departmental integrity of various
                      businesses.
                    </p>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block-black tcc-white-bg">
                    <h2>
                      Cloud <br />
                      Computing
                    </h2>
                    <p>
                      Give your business agility, efficiency and security
                      relying on Google, AWS and Microsoft Azure Cloud
                      Platforms.
                    </p>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block tcc-bondi-blue-bg">
                    <h2>
                      Cyber <br />
                      Security
                    </h2>
                    <p>
                      Build a roadmap for resilient enterprise and improve your
                      organisational security.
                    </p>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block-black tcc-white-bg">
                    <h2>
                      UX/UI <br />
                      Design{' '}
                    </h2>
                    <p>
                      User experience is determined by how easy or difficult it
                      is to interact with the user interface elements that the
                      UI designers have created.
                    </p>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block tcc-young-bug-bg">
                    <h2>
                      Software <br />
                      Arch. & Design{' '}
                    </h2>
                    <p>
                      Architecture serves as a blueprint for a system. It
                      provides an abstraction to manage the system complexity
                      and establish a communication and coordination mechanism
                      among components.
                    </p>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block p-0 lazy-img-block">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      src={img_appdev1}
                      alt="app-dev"
                      class="img-fluid w-100"                
                    />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block-black tcc-white-bg">
                    <h2>Enterprise Blockchain & DLT Architecture</h2>
                    <p>
                      A new model for building successful and massively scalable
                      applications that runs on a distributed ledger technology
                      (DLT) system.
                    </p>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block p-0 lazy-img-block">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      src={img_appdev3}
                      alt="app-dev"
                      class="img-fluid w-100"                                    
                    />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block-black tcc-zircon-bg">
                    <h2>Machine Learning </h2>
                    <p>
                      Key building blocks for applying artificial intelligence
                      in enterprise applications are data analytics, data
                      science and machine learning, including its deep learning
                      subset
                    </p>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                  <div class="advisory-block-black tcc-white-bg">
                    <h2>Robotic Process Automation(RPA) </h2>
                    <p>
                      RPA is software that transforms your manual tasks to
                      automated ones ( e.g., Automate KYC/AML/CDD compliance
                      workflow).
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-12 p-md-0 d-flex">
                  <div class="advisory-block mbl-img-res p-0">
                    <LazyLoadImage
                      alt="app-dev"
                      effect="blur"
                      class="img-fluid w-100"
                      src={img_appdev5}
                      scrollPosition={scrollPosition}               
                    />
                  </div>
                </div>

                <div class="col-xl-6 col-lg-12">
                  <div class="row">
                    <div class="col-lg-12 p-md-0">
                      <div class="adv-technology-coaching tcc-dark-orange-bg">
                        <h2>Technology Coaching Model </h2>
                        <p class="adv-coaching1">
                          Since 2015 , I have been working globally with FinTech
                          startups , Technology Companies, Regulators and
                          Financial Institutions. My past clients have benefited
                          from my 20 + years of experience in agile approach to
                          researching ,designing software architecture and
                          delivering safe and effective products in a more
                          circular economy.
                        </p>
                        <p class="adv-coaching2">
                          I offer agile coaching in two models .....
                        </p>

                        <div class="adv-arrow">
                          <LazyLoadImage
                            effect="blur"
                            scrollPosition={scrollPosition}
                            src={img_advdownarrow}
                            alt="down arrow"
                            class="img-fluid w-100"                    
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 p-md-0">
                      <div class="adv-technology-coaching tcc-bondi-blue-bg">
                        <div class="advisory-block-num">1</div>
                        <h3> Broad Knowledge </h3>
                        <p>
                          As part of a cross-functional team, collaborating
                          closely with the founder and senior team member to
                          share my deep innovation expertise, practical
                          experience, and battle-tested transformation
                          practices.
                        </p>
                        <div class="blog-arrow-right darkgb-bg">
                          <Link href="/technology-consulting-services">
                            <a>
                              <LazyLoadImage
                                effect="blur"
                                scrollPosition={scrollPosition}
                                class="img-fluid w-100"
                                src={img_whiterightarrow1}
                                alt="arrow-right"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 p-md-0">
                      <div class="adv-technology-coaching tcc-ocean-blue-bg">
                        <div class="advisory-block-num">2</div>
                        <h3>Narrow Expertise </h3>
                        <p>
                          Training on agile concepts, values, culture,
                          behaviours, and practices, and engage in hands-on,
                          rolling-up-my-sleeves coaching as you work through
                          day-to-day problem solving in an agile fashion.
                        </p>
                        <div class="blog-arrow-right darkgbd-bg">
                          <Link href="/technology-consulting-services">
                            <a>
                              <LazyLoadImage
                                effect="blur"
                                scrollPosition={scrollPosition}
                                class="img-fluid w-100"
                                src={img_whiterightarrow1}
                                alt="arrow-right"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 p-md-0 d-flex">
                  <div class="adv-technology-coaching tcc-young-bug-bg">
                    <div class="adv-testimo">
                      <div class="adv-testimo-pic">
                        <LazyLoadImage
                          effect="blur"
                          scrollPosition={scrollPosition}
                          class="img-fluid w-100"
                          src={img_userpic}
                          alt="img"
                        />
                      </div>
                      <div class="adv-testimo-dtails">
                        <h3>Lesley Maye</h3>
                        <p>CEO, Bricktrade</p>
                      </div>
                    </div>
                    <p class="adv-testo-txt">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-6 p-md-0">
                  <div class="advisory-logo-block tcc-gray-bg">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      class="img-fluid w-100"
                      src={Slideimg1}
                      alt="hyperionnet"
                    />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 p-md-0">
                  <div class="advisory-logo-block">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      class="img-fluid w-100"
                      src={Slideimg2}
                      alt="liquid cash"
                    />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 p-md-0">
                  <div class="advisory-logo-block">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      class="img-fluid w-100"
                      src={Slideimg3}
                      alt="bricktrade"
                    />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 p-md-0">
                  <div class="advisory-logo-block tcc-gray-bg">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      class="img-fluid w-100"
                      src={Slideimg4}
                      alt="plutoclear"
                    />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 p-md-0">
                  <div class="advisory-logo-block">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      class="img-fluid w-100"
                      src={Slideimg5}
                      alt="pluto500"
                    />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 p-md-0">
                  <div class="advisory-logo-block tcc-gray-bg">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      class="img-fluid w-100"
                      src={Slideimg6}
                      alt="myteam11"
                    />
                  </div>
                </div>

                {/* <div class="col-xl-3 col-lg-6 p-md-0">
              <div class="advisory-logo-block tcc-gray-bg p-0">
                <img src={Slideimg7} alt="vm" class="img-fluid" />
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 p-md-0">
              <div class="advisory-logo-block tcc-gray-bg p-0">
                <img src={Slideimg8} alt="vm" class="img-fluid" />
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 p-md-0">
              <div class="advisory-logo-block tcc-gray-bg p-0">
                <img src={Slideimg9} alt="vm" class="img-fluid" />
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 p-md-0">
              <div class="advisory-logo-block tcc-gray-bg p-0">
                <img src={Slideimg10} alt="vm" class="img-fluid" />
              </div>
            </div> */}
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-12 p-md-0 d-flex">
                  <div class="advisory-left-img-block p-0 lazy-img">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      class="img-fluid w-100"
                      src={img_appdev2}
                      alt="app-dev"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                  <div class="row">
                    <div class="col-lg-12 p-md-0">
                      <div class="adv-why-me tcc-red-bg">
                        <h3>Why me</h3>
                        <ul>
                          <li>
                            I am leading a London based Tech coaching &
                            consultancy team, Real Expertise , Real Results.
                          </li>
                          <li>
                            I am supported by a dedicated ,India- Pune based
                            Business Analytics , Data Science team, Our
                            collaborative, co-creative team empowers businesses
                            with data driven insights . Importantly, we are
                            fully technology agnostic and able to work with our
                            clients' preferred technologies and platforms. Once
                            the technology tools and frameworks are implemented
                            , we focus on building and transferring capabilities
                            and skills to ensure that software applications
                            becomes a sustained competitive advantage.
                          </li>
                        </ul>
                        <div class="adv-why-me-bottm">
                          <div class="adv-why-me-bottm-block">
                            <div class="adv-why-me-bottm-img-block">
                              <LazyLoadImage
                                effect="blur"
                                scrollPosition={scrollPosition}
                                class="img-fluid w-100"
                                src={img_whymeimg1}
                                alt="logo"
                              />
                            </div>
                            <p>
                              No Language <br />
                              Barrier{' '}
                            </p>
                          </div>
                          <div class="adv-why-me-bottm-block">
                            <div class="adv-why-me-bottm-img-block">
                              <LazyLoadImage
                                effect="blur"
                                scrollPosition={scrollPosition}
                                class="img-fluid w-100"
                                src={img_whymeimg2}
                                alt="logo"
                              />
                            </div>
                            <p>
                              Same <br />
                              Time Zone
                            </p>
                          </div>
                          <div class="adv-why-me-bottm-block">
                            <div class="adv-why-me-bottm-img-block">
                              <LazyLoadImage
                                effect="blur"
                                scrollPosition={scrollPosition}
                                class="img-fluid w-100"
                                src={img_whymeimg3}
                                alt="logo"
                              />
                            </div>
                            <p>
                              Strong
                              <br />
                              Culture Fit
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 p-md-0">
                      <div class="adv-how-help position-relative">
                        <h3>Technology Consulting Services</h3>
                        <h4>
                          How I can <span class="adv-young-bug">help</span>
                        </h4>
                        <p>
                          Raise your business to the next level with
                          groundbreaking strategy, fresh technologies and
                          innovation advisory that help drive business value.
                        </p>
                        <div class="adv-arrow-right">
                          <Link href="/technology-consulting-services">
                            <a>
                              <LazyLoadImage
                                effect="blur"
                                scrollPosition={scrollPosition}
                                class="img-fluid w-100"
                                src={img_rightarrow}
                                alt="arrow-right"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
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

export default trackWindowScroll(TechAdvisoryConsultancy);
