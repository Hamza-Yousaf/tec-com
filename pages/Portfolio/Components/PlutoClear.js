import React from "react";
const plutoclearpic1 = "/images/plutoclear-pic1.png";
const buttonicon = "/images/button-icon.png";
const PlutoClear = (props) => {
  console.log("plutoclear", props);
  return (
    <div>
      <div class="row port-custm-marg">
        <div class="col-lg-12">
          <div class="portfolio-plutoclear-detail-bg">
            <div class="mk-portfolio-detail-innerblock">
              <h3>Pluto Clear</h3>
              <p>
                Financial asset tokenization solution.Millisecond settlement
                within the paltform eco-system significantly reduces
                counter-party and settlement risks for fiat and digital asset
                trading. Minimises any insolvency risks.
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
                  COMING SOON
                  {/* <img src={buttonicon} alt="button" class="img-fluid" /> */}
                </a>
              </div>
            </div>
            <div>
              <img src={plutoclearpic1} alt="plutoclear" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlutoClear;
