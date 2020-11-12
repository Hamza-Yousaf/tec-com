import React, { useState } from "react";

const plutoclearpic1 = "/images/plutoclear-pic1.png";
const buttonicon = "/images/button-icon.png";
const bricktradepic2 = "/images/bricktrade-pic2.png";
const bricktradepic3 = "/images/bricktrade-pic3.png";
const myteamimage1 = "/images/myteam-img1.png";
const Hyperian = "/images/Hyperian.png";
const liquidcash = "/images/liquidcash-pic.png";
 const DefaultDomain = () => {
  const [showmore, setshowmore] = useState(false);
  const loadmore = () => {
    setshowmore(true);
  };
  return (
    <>
      <div class="mk-portfolio-next-block">
        <div class="row port-custm-marg">
          <div class="col-lg-6">
            <div class="mk-portfolio-next-left portfolio-plutoclear-bg">
              <div class="mk-portfolio-innerblock">
                <h3>Pluto Clear</h3>
                <p>
                  a Central Security Tokens Depository (CSTD) system powered by
                  permissioned Blockchain.
                </p>
                <ul class="mk-portfolio-domain-tehch">
                  <li>Fintech</li>
                  <li>Crypto Asset</li>
                  <li>Machine Learning</li>
                  <li>Big Data </li>
                </ul>
                <div>
                  <img
                    src={plutoclearpic1}
                    alt="plutoclear"
                    class="img-fluid"
                  />
                </div>
                <div class="protfolio-seenow-block">
                  <a href="#" class="profolio-seenow-btn">
                    COMING SOON{" "}
                    {/* <img src={buttonicon} alt="button" class="img-fluid" /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mk-portfolio-next-right">
              <div class="mk-portfolio-next-right-block1 port-custm-marg portfolio-bricktrade-bg">
                <div class="mk-portfolio-rihgt-innerblock">
                  <div class="portfolio-max424">
                    <h3>Brick Trade</h3>
                    <p>
                      Accessible property
                      <br /> investments
                    </p>
                    <ul class="mk-portfolio-domain-tehch mb-4">
                      <li>Fintech</li>
                      <li>Crypto Asset </li>
                      <li>Real Estate </li>
                      <li>Marketplace</li>
                    </ul>
                    <div class="protfolio-seenow-block">
                      <a
                        href="/case-study/Bricktrade"
                        class="profolio-seenow-btn"
                      >
                        SEE NOW{" "}
                        <img src={buttonicon} alt="button" class="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div class="mk-portfolio-innerblock1-right">
                    <img
                      src={bricktradepic2}
                      alt="plutoclear"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div class="mk-portfolio-next-right-block1 portfolio-pluto500-bg">
                <div class="mk-portfolio-rihgt-innerblock">
                  <div class="portfolio-max424">
                    <h3>PLuto500</h3>
                    <p>
                      Fully-loaded turnkey exchange platform and robust support
                    </p>
                    <ul class="mk-portfolio-domain-tehch mb-4">
                      <li>Fintech</li>
                      <li>Crypto Asset</li>
                      <li>Blockchain </li>
                      <li>Trading </li>
                    </ul>
                    <div class="protfolio-seenow-block">
                      <a href="#" class="profolio-seenow-btn">
                        COMING SOON{" "}
                        {/* <img src={buttonicon} alt="button" class="img-fluid" /> */}
                      </a>
                    </div>
                  </div>
                  <div class="mk-portfolio-innerblock1-right">
                    <img
                      src={bricktradepic3}
                      alt="plutoclear"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showmore && (
          <div id="port-loadmore" class="row ">
            <div class="col-lg-6">
              <div class="mk-portfolio-next-left portfolio-hyperionet-bg">
                <div class="mk-portfolio-innerblock">
                  <h3>Hyperionet</h3>
                  <p>
                    Supercharge your financial application with interest and
                    liquidity.Expand functionality, without compromising
                    liquidity.
                  </p>
                  <ul class="mk-portfolio-domain-tehch">
                    <li>Fintech</li>
                    <li>Crypto Asset</li>
                    <li>Network Security</li>
                    <li>Blockchain </li>
                  </ul>
                  <div>
                    <img src={Hyperian} alt="Hyperian" class="img-fluid" />
                  </div>
                  <div class="protfolio-seenow-block">
                    <a href="#" class="profolio-seenow-btn">
                      COMING SOON{" "}
                      {/* <img src={buttonicon} alt="button" class="img-fluid" /> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mk-portfolio-next-right">
                <div class="mk-portfolio-next-right-block1 port-custm-marg portfolio-liquidcash-bg">
                  <div class="mk-portfolio-rihgt-innerblock">
                    <div class="portfolio-max424">
                      <h3>Liquid Cash</h3>
                      <p>
                        Next generation brokerage for security token
                        Offering(STO)
                      </p>
                      <ul class="mk-portfolio-domain-tehch mb-4">
                        <li>Fintech</li>
                        <li>Crypto Asset </li>
                        <li>Big Data </li>
                        <li>Machine Learning</li>
                      </ul>
                      <div class="protfolio-seenow-block">
                        <a href="#" class="profolio-seenow-btn">
                          COMING SOON{" "}
                          {/* <img
                            src={buttonicon}
                            alt="button"
                            class="img-fluid"
                          /> */}
                        </a>
                      </div>
                    </div>
                    <div class="mk-portfolio-innerblock1-right">
                      <img
                        src={liquidcash}
                        alt="plutoclear"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                </div>

                <div class="portfolio-myteam-bg p-0">
                  <div class="mk-portfolio-myteam-innerblock">
                    <div class="mk-portfolio-myteam-left">
                      <h3>MyTeam 11</h3>
                      <p>The fastest-growing fantasy sports app</p>
                      <ul class="mk-portfolio-domain-tehch mb-4">
                        <li>DevOps</li>
                        <li>Cloud</li>
                        <li>Enterprise </li>
                        <li>IT Security </li>
                      </ul>
                      <div class="protfolio-seenow-block">
                        <a
                          href="/case-study/team11"
                          class="profolio-seenow-btn"
                        >
                          SEE NOW{" "}
                          <img
                            src={buttonicon}
                            alt="button"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="mk-portfolio-myteam-right">
                      <div>
                        <img
                          src={myteamimage1}
                          alt="my team"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div class="mk-portfolio-btn">
        <a
          href="javascript:void(0)"
          class="btn mk-load-mo-btn"
          onClick={() => loadmore()}
        >
          LOAD MORE
        </a>
      </div>
    </>
  );
};

export default DefaultDomain;