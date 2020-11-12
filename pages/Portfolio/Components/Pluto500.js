import React from "react";
const plutoclearpic4 = "/images/plutoclear-pic4.png";
const buttonicon = "/images/button-icon.png";
const Pluto500 = (props) => {
  return (
    <div>
      <div class="row port-custm-marg">
        <div class="col-lg-12">
          <div class="portfolio-plutoclear-detail-bg pb-0">
            <div class="mk-portfolio-detail-innerblock">
              <h3>Pluto 500</h3>
              <p>
                Fully-loaded turnkey digital asset spot exchange with a focus on
                super-fast and stable matching engine performance and reliable
                IT security.
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
              <img src={plutoclearpic4} alt="plutoclear" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pluto500;
