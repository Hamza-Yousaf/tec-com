import React from "react";
const plutoclearpic3 = "/images/plutoclear-pic3.png";
const buttonicon = "/images/button-icon.png";
const LiquidCash = (props) => {
  return (
    <div>
      <div class="row port-custm-marg">
        <div class="col-lg-12">
          <div class="portfolio-liquidcash-bg2 pb-0">
            <div class="mk-portfolio-detail-innerblock">
              <h3>Liquid Cash</h3>
              <p>
                Next generation brokerage investment platform offering security
                token that leverages private blockchain technology to enable
                issuance, trading and management of digital securities.
              </p>
              <ul class="mk-portfolio-domain-tehch">
                {props &&
                  props.tags &&
                  props.tags.map((tag, i) => (
                    <li
                      className={
                        props.selectedTag.includes(tag) ? "tech-active" : ""
                      }
                      key={i}
                    >
                      {tag}
                    </li>
                  ))}
              </ul>
              <div class="protfolio-seenow-block">
                <a href="#" class="profolio-seenow-btn">
                  COMING SOON{" "}
                  {/* <img src={buttonicon} alt="button" class="img-fluid" /> */}
                </a>
              </div>
            </div>
            <div>
              <img src={plutoclearpic3} alt="liquidcash" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LiquidCash;
