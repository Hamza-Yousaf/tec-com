import React from "react";
const plutoclearpic1 = "/images/plutoclear-pic1.png";
const buttonicon = "/images/button-icon.png";
const bricktradepic2 = "/images/bricktrade-pic2.png";
const bricktradepic3 = "/images/bricktrade-pic3.png";

const DefaultTechnology = () => {
  return (
    <>
      <div class="mk-portfolio-next-block">
        <div class="row port-custm-marg">
          <div class="col-lg-6">
            <div class="mk-portfolio-next-left portfolio-plutoclear-bg">
              <div class="mk-portfolio-innerblock">
                <h3>Pluto Clear</h3>
                <p>
                  Financial asset tokenization solution .Millisecond settlement
                  within our eco-system significantly reduces counter-party and
                  settlement risks for fiat and digital asset trading. Minimises
                  any insolvency risks.
                </p>
                <ul class="mk-portfolio-domain-tehch">
                  <li>NodeJs</li>
                  <li>ReactJs</li>
                  <li>MongoDB</li>
                  <li>Apache Spark</li>
                </ul>
                <div>
                  <img
                    src={plutoclearpic1}
                    alt="plutoclear"
                    class="img-fluid"
                  />
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
                      Accessible Property <br /> Investments
                    </p>
                    <ul class="mk-portfolio-domain-tehch mb-4 d-md-block">
                      <li>React Native</li>
                      <li>Hyperledger</li>
                      <li>React Js</li>
                      <li>NodeJs</li>
                    </ul>
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
                    <ul class="mk-portfolio-domain-tehch mb-4 d-md-block">
                      <li>React Native </li>
                      <li>React Js</li>
                      <li>NodeJs </li>
                      <li>Kafka </li>
                    </ul>
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
      </div>
      <div class="mk-portfolio-btn">
        <a
          href="javascript:void(0)"
          class="btn mk-load-mo-btn"
          onclick="loadFunction()"
        >
          LOAD MORE
        </a>
      </div>
    </>
  );
};

export default DefaultTechnology; 