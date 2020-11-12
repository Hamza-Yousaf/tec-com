import React from "react";
import Link from 'next/link';
// Images
const chevrons_right = 'images/chevrons-right.png';

import StartupHeading from "./components/StartupHeading";
import StartupService from "./components/StartupService";
import StartupResources from "./components/StartupResources";
import StartupOffer from "./components/StartupOffer";
import StartupBenefit from "./components/StartupBenefit";
import StartupBenefitList from "./components/StartupBenefitList";

import OtherHeader from '../components/Common/OtherHeader';

class StartupPage extends React.Component {
  render() {
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
              <Link href="/startup">
              <span class="selected-list-item">For Startups</span>
              </Link>
            </div>
          </div>
        </div>
        <div class="custom-container">
          {/* Heading */}
          <StartupHeading></StartupHeading>
          {/* Advisory */}
          <StartupService></StartupService>
          {/* Resources */}
          <StartupResources></StartupResources>
          {/* StartupOffer */}
          <StartupOffer></StartupOffer>
          {/* StartupBenefit */}
          <StartupBenefit></StartupBenefit>
          {/* StartupBenefitList */}
          <StartupBenefitList></StartupBenefitList>
        </div>
        </div>
      </>
    );
  }
}

export default StartupPage;
