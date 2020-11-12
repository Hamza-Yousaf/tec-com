import React from "react";
import OtherHeader from "../components/Common/OtherHeader";

const gcloud = "/images/gcloud.png";
const myteam_pic2 = "/images/myteam-pic2.png";
const myteam_pic3 = "/images/myteam-pic3.png";
const chevrons_right = "/images/chevrons-right.png";

const Team11 = () => {
  return (
    <>
      <div class="inner-body">
        <OtherHeader />

        <div class="custom-container">
          <div class="row">
            <div class="head-top-breadcrumb">
              <span>
                <a href="/">Home</a>
              </span>
              <span class="chevrons-right">
                <img src={chevrons_right} alt="chevrons right" />
              </span>
              <span class="selected-list-item">Case Study - MyTeam11 </span>
            </div>
          </div>
        </div>
        <div class="custom-container">
          <div class="row">
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-team11-block team11-bg1">
                <h2>Objective</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-team11-block-right position-relative">
                {/* <!-- <img src="images/myteam-pic1.png" alt="my team" class="img-fluid"/> --> */}
                <div class="casestudy-team11-gcloud">
                  <img src={gcloud} alt="my team" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-team11-block-left position-relative team11-bg2">
                <img src={myteam_pic2} alt="my team" class="img-fluid" />
                <div class="casestudy-team11-gcloud2">
                  <img src={gcloud} alt="my team" class="img-fluid" />
                </div>
                <p class="casestudy-team11-txtline">
                  Google Cloud infrastructure{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-team11-block white-bg">
                <h2 class="black-color">Solution</h2>
                <p class="black-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-team11-block team11-bg3">
                <h2 class="black-color">MyTeam11</h2>
                <p class="black-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div class="col-lg-6 p-md-0">
              <div class="casestudy-team11-block-right2 position-relative team11-blue-bg">
                <img src={myteam_pic3} alt="my team" class="img-fluid" />
                <div class="casestudy-team11-gcloud3">
                  <img src={gcloud} alt="my team" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-lg-12 p-md-0">
              <div class="casestudy-team11-estimate-project">
                <div class="casestudy-team11-estimate-project-lft">
                  <h2>Do you need DevOps & Cloud expert ?</h2>
                  <h3>I'll help you choose a cloud platform</h3>
                </div>
                <div class="casestudy-team11-estimate-project-right">
                  <a
                    href="/coaching-consulting-fees"
                    class="btn team-estimate-btn"
                  >
                    Estimate a project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team11;
