import React from 'react';
import Link from 'next/link';
import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

const img_chevronsright = 'images/chevrons-right.png';
const Link2 = 'images/link2.png';
const Linkarrow = 'images/link-arrow.png';
import OtherHeader from '../components/Common/OtherHeader';

class TechnologyCoachingServices extends React.Component {
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
                    src={img_chevronsright}
                    alt="chevrons right"
                    effect="blur"
                    class="img-fluid"
                    scrollPosition={scrollPosition}
                  />
                </span>
                <Link href="/technology-coaching-services">
                  <span class="selected-list-item">
                    Technology Coaching Services
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div class="custom-container">
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                <div class="tech-coaching-block ocean-blue-color">
                  <h2>What I do</h2>
                  <p>
                    I have been coaching Fintech startups , financial trading
                    platforms , VC’s , private equity firms. manufactures ,
                    supply chains, ship brokers in all stages of product
                    innovation and life cycles.
                  </p>
                  <p class="tech-coaching-help">
                    I can help with the following :
                    {/* <span>
                      <a href="#">
                        <img src={Linkarrow} alt="link" class="img-fluid" />
                      </a>
                    </span> */}
                  </p>
                  <div class="coaching-link">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      src={Link2}
                      alt="link"
                      class="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                <div class="tech-coaching-block-new tcc-white-bg">
                  <div class="tech-block-no block-no-clr1">1</div>
                  <p class="techo-custm-marg">
                    <span> Startup Disruptor</span> think through refined
                    customer segmentation, improved sales force effectiveness,
                    optimized channel partner networks, streamlined R&D
                    processes, strategic sourcing and cost reduction efforts can
                    help them maintain, or even increase, their advantage.
                  </p>
                  <div class="coaching-link">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      src={Link2}
                      alt="link"
                      class="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                <div class="tech-coaching-block tcc-young-bug-bg">
                  <div class="tech-block-no block-no-clr5">2</div>
                  <p class="techo-custm-marg">
                    <span>Emerging players</span>
                    continue their trajectory by helping them to scale their
                    organizations and processes to the increased complexity of
                    their market participation.
                  </p>
                  <div class="coaching-link">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      src={Link2}
                      alt="link"
                      class="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                <div class="tech-coaching-block-new tcc-white-bg">
                  <div class="tech-block-no block-no-clr3">3</div>
                  <p class="techo-custm-marg">
                    <span>CTOs, CIOs, financial sponsors</span> and companies of
                    all sizes and in all financial sectors understand the full
                    potential of cloud computing to transform how work gets
                    done.
                  </p>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                <div class="tech-coaching-block-new">
                  <div class="tech-block-no block-no-clr3">4</div>
                  <p class="techo-custm-marg">
                    <span>Private equity </span>
                    portfolio companies align strategic imperatives with their
                    new owners, develop and implement plans to improve
                    operational performance.
                  </p>
                  <div class="coaching-link-top coach-display-blk1">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      src={Link2}
                      alt="link"
                      class="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 p-md-0">
                <div class="tech-coaching-block tcc-bondi-blue-bg">
                  <div class="tech-block-no block-no-clr4">5</div>
                  <p class="techo-custm-marg">
                    <span>Technology and financial service</span> providers and
                    large organizations, as well as private equity investors, to
                    address a wide range of cybersecurity issues, ranging from
                    enhanced resilience to attacks to go-to-market and
                    investment strategies and opportunities.
                  </p>
                  <div class="coaching-link-top coach-display-blk2">
                    <LazyLoadImage
                      effect="blur"
                      scrollPosition={scrollPosition}
                      src={Link2}
                      alt="link"
                      class="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-md-12 p-md-0">
                <div class="tech-coaching-block tech-coaching-bg"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6 col-lg-12 p-md-0 d-flex">
                <div class="tech-coaching-block coach-bg2">
                  <h2>What kind of technology Coaching do I offer?</h2>
                  <p class="mb-4">
                    Technology coaching are essentially an external IT
                    department. Most of the projects that rely on technology
                    coaching are focused on implementation. As a technology
                    coach, I would be checking a proposed IT project and makes
                    it happen.
                  </p>

                  <p>
                    Specific tasks also include performing studies, checking the
                    cost of the proposed solution, planning the implementation,
                    making quality controls, and implementing organizational
                    consulting. Tech coaching also acts as an interface between
                    the company and its hardware and software providers. Any
                    technology coaching activity is going to include one of the
                    following tasks:
                  </p>
                  <div class="tech-coaching-offer">
                    <div class="tech-coach-list1">
                      <ul>
                        <li> Presenting strategies and experience to client</li>
                        <li>Developing and providing solutions</li>
                        <li>
                          Understanding how technology impacts different
                          departments of the organization
                        </li>
                        <li>Communicating with team members</li>
                        <li>Going to client sites</li>
                        <li>Bringing new systems and monitoring them</li>
                        <li>
                          Creating documentation and showing the progress
                          reports
                        </li>
                        <li>
                          Being involved with sales, support, and maintaining
                          contact with client organizations
                        </li>
                        <li>Bringing new ideas and trends</li>
                      </ul>
                    </div>
                    <div class="tech-coach-list2">
                      <h3>Usually, areas of technology coaching include:</h3>
                      <ul>
                        <li>Software development</li>
                        <li>IT infrastructure planning</li>
                        <li>Risk assessment analysis</li>
                        <li>Security consulting</li>
                        <li>Recovery plan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-12">
                <div class="row">
                  <div class="col-lg-6 p-md-0">
                    <div class="tech-coaching-block-new tcc-white-bg">
                      <h3></h3>
                      <p>
                        I have been working with leading financial technology
                        companies to build strategic plans that address the
                        financial industry challenges, such as how technical and
                        business model innovations shape the growth of a
                        company's core business; the ways in which cloud
                        computing will impact the business; and whether a
                        company should consider entry into the services profit
                        pools of the industry—and if so, how.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 p-md-0">
                    <div class="tech-coaching-block tcc-ocean-blue-bg">
                      <h3>
                        I design & build beautiful & reliable technology
                        platforms
                      </h3>
                      <p>
                        I strongly believe that communication, trust &
                        Transparency are the essential elements of successful
                        business relationship.
                      </p>
                      <div class="tech-tools-jjurny-block">
                        <h3>Ready for the Journey ? </h3>
                        <div class="tech-tools-btn">
                          <span class="mr-3">
                            <a
                              href="/contact-me"
                              class="btn tech-tools-jjurny-btn"
                            >
                              Contact me{' '}
                            </a>
                          </span>
                          <span>
                            <a
                              href="/Portfolio"
                              class="btn tech-tools-jjurny-btn"
                            >
                              My Portfolio
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 p-md-0">
                    <div class="tech-coaching-block-new light-grayish-color">
                      <h2>Startups Coaching</h2>
                      <p class="mb-4">
                        Going for a permanent IT expert can be expensive,
                        especially for a startup company. The advantage of
                        technology coaching is that the coach gets paid for the
                        work done on a specific time frame. Many businesses do
                        not need monthly IT service.
                      </p>

                      <p>
                        A company might require somebody to install a new system
                        and do the training for the team. After that, the
                        organization can handle the order, and the expert can
                        help when any issues come into the front. I have worked
                        with clients in computer software and cloud computing ,
                        DevOps, storage, Cyber security,Blockchain . My clients
                        include Fintech Startups , Private equity firms , three
                        of leading regulators in GCC capital markets and many
                        key participants in the Blockchain industry and
                        peripherals sectors. My experience extends across North
                        America,EMEA,Singapore and Hong Kong.
                      </p>
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

export default trackWindowScroll(TechnologyCoachingServices);
