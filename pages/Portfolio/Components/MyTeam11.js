import React from "react";
const plutoclearpic5 = "/images/plutoclear-pic5.png";
const buttonicon = "/images/button-icon.png";
const MyTeam11 = (props) => {
  return (
    <div>
      <div class="row">
        <div class="col-lg-12">
          <div class="portfolio-myteam-bg2 p-0">
            <div class="mk-portfolio-myteam-innerblock">
              <div class="mk-portfolio-myteam-left2">
                <h3>MyTeam 11</h3>
                <p>
                  one of the most sought-after e-sport platform in India with
                  15Mn+ fantasy gamers. Touted as the fastest-growing fantasy
                  sports app.
                </p>
                <ul class="mk-portfolio-domain-tehch mb-4">
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
                  <a href="/case-study/team11" class="profolio-seenow-btn">
                    SEE NOW{" "}
                    <img src={buttonicon} alt="button" class="img-fluid" />
                  </a>
                </div>
              </div>
              <div class="mk-portfolio-myteam-right">
                <div>
                  <img src={plutoclearpic5} alt="my team" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyTeam11;
