import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import "./index.css";
import OtherHeader from "../components/Common/OtherHeader";
const Chevronsright = "/images/chevrons-right.png";
const Portfolioimg1 = "/images/portfolio-img1.png";
import TechnologyPortfolio from "./TechnologyPortfolio";
import DomainPortfolio from "./DomainPortfolio";
import PlutoClear from "./Components/PlutoClear";
import BrickTrade from "./Components/BrickTrade";
import HyperianNet from "./Components/HyperianNet";
import Pluto500 from "./Components/Pluto500";
import MyTeam11 from "./Components/MyTeam11";
import LiquidCash from "./Components/LiquidCash";
const blocks = [
  {
    component: PlutoClear,
    blockClass: "col-lg-12",
    domaintags: ["Fintech", "Crypto Asset", "Machine Learning", "BigData"],
    technologytags: [
      "Node.Js",
      "ReactJs",
      "MongoDB",
      "Apache Spark",
      "Kafka",
      "Stellar",
      "Digital Ocean",
      "Corda",
    ],
  },
  {
    component: BrickTrade,
    blockClass: "col-lg-12",
    domaintags: ["Fintech", "Crypto Asset", "Machine Learning", "Marketplace"],
    technologytags: [
      "React Native",
      "ReactJs",
      "Hyperledger",
      "Docker",
      "Nginx",
      "MongoDB",
      "iOS",
      "Android",
      "NodeJs",
    ],
  },
  {
    component: Pluto500,
    blockClass: "col-lg-12",
    domaintags: [
      "Fintech",
      "Cloud",
      "Machine Learning",
      "Marketplace",
      "Trading",
      "Crypto Assets",
    ],
    technologytags: [
      "React Native",
      "ReactJs",
      "Kafka",
      "Python",
      "Ethereum",
      "Bitcoin",

      "Azure",
      "PostGreSQL",
    ],
  },
  {
    component: HyperianNet,
    blockClass: "col-lg-12",
    domaintags: [
      "Fintech",
      "Blockchain",
      "Machine Learning",
      "BigData",
      "Crypto Asset",
      "DevOps ",
      "IT Security",
      "Network Security ",
    ],
    technologytags: [
      "ReactJs",
      "Google Cloud",
      "PostGreSQL",
      "Kafka",
      "Nginx",
      "Docker",
      "NodeJs",
      "AWS",
    ],
  },
  {
    component: LiquidCash,
    blockClass: "col-lg-12",
    domaintags: [
      "Fintech",
      "Crypto Asset",
      "Machine Learning",
      "BigData",
      "DevOps  ",
      "IT Security",
    ],
    technologytags: [
      "ReactJS",
      "NodeJs",
      "PostGreSQL",
      "Python",
      "Ethereum",
      "BitCoin",
      "Azure",
      "Kafka",
    ],
  },
  {
    component: MyTeam11,
    blockClass: "col-lg-12",
    domaintags: ["Gaming", "DevOps", "Cloud", "Big Data  "],
    technologytags: ["Docker", "SQL", "Cloudflare", "Google Cloud", "Firebase"],
  },
];
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showMain: true,
      selectedTag: "fintech",
    };
  }

  render() {
    const { showMain } = this.state;
    return (
      <>
        <div class="body-bg">
          <OtherHeader />
          <div class="custom-container">
            <div class="row">
              <div class="head-top-breadcrumb">
                <span>
                  <a href="#">Home</a>
                </span>
                <span class="chevrons-right">
                  <img src={Chevronsright} alt="chevrons right" />
                </span>
                <span class="selected-list-item">Portfolio</span>
              </div>
            </div>
          </div>
          <div class="custom-container">
            <div class="row">
              <div class="col-lg-6 p-md-0">
                <div class="mk-portfolio-lft">
                  <p>
                    From idea to a successful product. Based on quality,
                    security and high-performance.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 p-md-0">
                <div class="mk-portfolio-right">
                  <img src={Portfolioimg1} alt="app-dev" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="mk-portfolio-tech">
                <Tabs>
                  <div class="mk-portfolio-block">
                    <TabList>
                      <div class="mk-portfolio-ac-tabs">
                        <ul>
                          <Tab selectedClassName="active" className="tablinks">
                            Domains
                          </Tab>
                          <Tab selectedClassName="active" className="tablinks">
                            Technologies
                          </Tab>
                        </ul>
                      </div>
                    </TabList>
                    <TabPanel>
                      <DomainPortfolio blocks={blocks} />
                    </TabPanel>
                    <TabPanel>
                      <TechnologyPortfolio blocks={blocks} />
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Portfolio;
