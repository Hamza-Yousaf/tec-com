import React from "react";
const graph_img1 = 'images/graph-img1.png';
const graph_img2 = 'images/graph-img2.png';
const graph_img3 = 'images/graph-img3.png';
const graph_img4 = 'images/graph-img4.png';
const graph_img5 = 'images/graph-img5.png';
const graph_img6 = 'images/graph-img6.png';
const graph_img7 = 'images/graph-img7.png';

const ResourcesBlock = () => {
  return (
    <div class="row azure-color">
      <div class="col-12 p-md-0">
        <div class="startup-resource-block azure-color">
          <div class="startup-resource-head">
            <h2>Resources require to devlope an MVP</h2>
            <p>
              When we talk about developing a minimum viable product (MVP),
              there is a vast set of tasks and responsibilities, which the team
              has to perform. Below you can find a list of MVP roles with most
              typical tasks those roles are accountable for. Please note that
              the list is not exhaustive. Other roles can also be added
              depending on your project specifics and size (e.g. DevOps,
              Information Security Experts, Quality Managers, Resource Managers,
              etc.). We left them out of the below MVP scope and tried to focus
              on the most typical ones.
            </p>
          </div>
          <div class="startup-mvp-time">
            <div class="startup-mvp-time-left">
              <ul>
                <li>
                  <div class="mvp-dev-role">
                    <h3>Project Manager</h3>
                    <p>600 hours</p>
                  </div>
                  <div class="mvp-time-graph">
                    <div class="mvp-time-week">
                      <span>4 Weeks </span>
                      <span>8 Weeks </span>
                      <span>12 Weeks </span>
                      <span>16 Weeks </span>
                    </div>
                    <div class="mvp-graph-img">
                      <img src={graph_img1} alt="graph" class="img-fluid" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mvp-dev-role">
                    <h3>Business Analyst</h3>
                    <p>400 hours</p>
                  </div>
                  <div class="mvp-time-graph">
                    <div class="mvp-graph-img">
                      <img src={graph_img2} alt="graph" class="img-fluid" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mvp-dev-role">
                    <h3>UX/UI Designer</h3>
                    <p>500 hours</p>
                  </div>
                  <div class="mvp-time-graph">
                    <div class="mvp-graph-img">
                      <img src={graph_img3} alt="graph" class="img-fluid" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mvp-dev-role">
                    <h3>Software Architect/ Senior Back-end Developer</h3>
                    <p>750 hours</p>
                  </div>
                  <div class="mvp-time-graph">
                    <div class="mvp-graph-img">
                      <img src={graph_img4} alt="graph" class="img-fluid" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mvp-dev-role">
                    <h3>Frontend Developer</h3>
                    <p>600 hours</p>
                  </div>
                  <div class="mvp-time-graph">
                    <div class="mvp-graph-img">
                      <img src={graph_img5} alt="graph" class="img-fluid" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mvp-dev-role">
                    <h3>QA Engineer</h3>
                    <p>450 hours</p>
                  </div>
                  <div class="mvp-time-graph">
                    <div class="mvp-graph-img">
                      <img src={graph_img6} alt="graph" class="img-fluid" />
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mvp-dev-role">
                    <h3>Dev Ops Engineer</h3>
                    <p>170 hours</p>
                  </div>
                  <div class="mvp-time-graph">
                    <div class="mvp-graph-img">
                      <img src={graph_img7} alt="graph" class="img-fluid" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="startup-mvp-time-right tcc-young-bug-bg">
              <h3>ToTAL</h3>
              <ul>
                <li>
                  <span>14</span>
                  <span>Specialists</span>
                </li>
                <li>
                  <span>16</span>
                  <span>WORK WEEKS</span>
                </li>
              </ul>
              <div class="startup-total-val">
                <span>3470</span>
                <span>WORK HOURS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesBlock;
