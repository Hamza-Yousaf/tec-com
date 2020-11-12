import React from "react";
import Link from "next/link";
import OtherHeader from "../components/Common/OtherHeader";
import Development from "./component/Development";
import Devops from "./component/Devops";
const chevrons_right = "images/chevrons-right.png";

const TechnologyTools = () => {
  return (
    <>
      <div class="body-bg">
        <OtherHeader />
        <div class="custom-container">
          <div class="row">
            <div class="head-top-breadcrumb">
              <span>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </span>
              <span class="chevrons-right">
                <img src={chevrons_right} alt="chevrons right" />
              </span>
              <Link href="/technology-tools">
                <span class="selected-list-item">Technology & Tools</span>
              </Link>
            </div>
          </div>
        </div>
        <div class="custom-container">
          {/* Heading */}
          <Development></Development>
          {/* Advisory */}
          <Devops></Devops>
          {/* Resources */}
        </div>
      </div>
    </>
  );
};

export default TechnologyTools;
