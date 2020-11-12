import React from "react";
const plutoclearpic2 = "/images/plutoclear-pic2.png";
const buttonicon = "/images/button-icon.png";
const BrickTrade = (props) => {
  return (
    <div>
      <div class="row port-custm-marg">
        <div class="col-lg-12">
          <div class="portfolio-plutoclear-detail-bg pb-0">
            <div class="mk-portfolio-detail-innerblock">
              <h3>Brick Trade</h3>
              <p>
                Affording more people with more real estate. Reducing the cost
                of property to fragments. Retaining the full value. Safeguarding
                ownership to the individual for best UK property investment.
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
                <a href="/case-study/Bricktrade" class="profolio-seenow-btn">
                  SEE NOW{" "}
                  <img src={buttonicon} alt="button" class="img-fluid" />
                </a>
              </div>
            </div>
            <div>
              <img src={plutoclearpic2} alt="plutoclear" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrickTrade;
