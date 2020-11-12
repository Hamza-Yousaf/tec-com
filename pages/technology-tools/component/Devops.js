import React from 'react';
import Link from 'next/link';
const technology_img77 = 'images/technology-img77.png';
const technology_img78 = 'images/technology-img78.png';
const technology_img79 = 'images/technology-img79.png';
const technology_img80 = 'images/technology-img80.png';
const technology_img81 = 'images/technology-img81.png';

const Devops = () => {
  return (
    <div class="row">
      <div class="col-xl-3 col-lg-6 p-md-0">
        <div class="tech-tools-block white-bg">
          <h3>DevOps</h3>
          <ul>
            <li>
              <img src={technology_img80} alt="logo" class="img-fluid" />
            </li>
            <li>
              <img src={technology_img79} alt="logo" class="img-fluid" />
            </li>
            <li>
              <img src={technology_img78} alt="logo" class="img-fluid" />
            </li>
            <li>
              <img src={technology_img77} alt="logo" class="img-fluid" />
            </li>

            <li>
              <img src={technology_img81} alt="logo" class="img-fluid" />
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6 p-md-0">
        <div class="tech-tools-platform-block tcc-young-bug-bg">
          <h3>
            I design &amp; build beautiful &amp; reliable technology platforms
          </h3>
          <p>
            I strongly believe that communication, trust &amp; Transparency are
            the essential elements of successful business relationship.
          </p>
          <div class="tech-tools-jjurny-block">
            <h3>Ready for the Journey ? </h3>
            <div class="tech-tools-btn">
              <span class="mr-3">
              <span>
                <Link href="/Portfolio">
                  <a class="btn tech-tools-jjurny-btn-1">My Portfolio</a>
                </Link>
              </span>
                <Link href="#">
                  <a class="btn tech-tools-jjurny-btn-2">
                    Get a project estimate{' '}
                  </a>
                </Link>
              </span>
             
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 p-md-0 d-flex">
        <div class="tech-tools-block p-0 tech-bloc-bg6"></div>
      </div>
    </div>
  );
};

export default Devops;
