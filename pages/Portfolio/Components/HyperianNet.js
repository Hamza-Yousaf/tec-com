import React from "react";
const Hyperian = "/images/Hyperian.png";
const buttonicon = "/images/button-icon.png";
const HyperianNet = (props) => {
  return (
    <div>
      <div class="row port-custm-marg">
        <div class="col-lg-12">
          <div class="portfolio-plutoclear-detail-bg">
            <div class="mk-portfolio-detail-innerblock">
              <h3>HyperionNet</h3>
              <p>
                Supercharge your financial application with interest and
                liquidity.Expand functionality, without compromising liquidity.
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
              <img src={Hyperian} alt="Hyperian" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HyperianNet;
