import React, { Component } from "react";
import { Tab } from "react-tabs";

import * as _ from "lodash";
import  DefaultTechnology  from "./Components/DefaultTechnology.js";
const tags = [
  { id: "golang", name: "Golang", selected: false },
  { id: ".net", name: ".Net", selected: false },
  { id: "ios", name: "iOS", selected: false },
  { id: "android", name: "Android", selected: false },
  { id: "sprint", name: "Sprint", selected: false },
  { id: "python", name: "Python", selected: false },
  { id: "graphql", name: "GraphQl", selected: false },
  { id: "reactjs", name: "ReactJs", selected: false },
  { id: "redux", name: "Redux", selected: false },
  { id: "reactnative", name: "React Native", selected: false },
  { id: "twilio", name: "Twilio", selected: false },
  { id: "firebase", name: "Firebase", selected: false },
  { id: "ionic", name: "Ionic", selected: false },
  { id: "angularjs", name: "AngularJs", selected: false },
  { id: "kotlin", name: "Kotlin", selected: false },
  { id: "node.js", name: "Node.Js", selected: false },
  { id: "html/css", name: "HTML/CSS", selected: false },
  { id: "javascript", name: "Java Script", selected: false },
  { id: "django", name: "Django", selected: false },
  { id: "azure", name: "Azure", selected: false },
  { id: "AWS", name: "AWS", selected: false },
  { id: "ansible", name: "Ansible", selected: false },
  { id: "googlecloud", name: "Google Cloud ", selected: false },
  { id: "terraformjenkins", name: "Terraform Jenkins", selected: false },
  { id: "devops", name: "DevOps", selected: false },
  { id: "etherum", name: "Etherum", selected: false },
  { id: "stellar", name: "Stellar", selected: false },
  { id: "quorum", name: "Quorum", selected: false },
  { id: "hyperledger", name: "Hyperledger", selected: false },
  { id: "corda", name: "Corda", selected: false },
  { id: "thomsonreuters", name: "Thomson Reuters", selected: false },
  { id: "swift", name: "Swift", selected: false },
  { id: "stripe", name: "Stripe", selected: false },
  { id: "paypal", name: "Paypal", selected: false },
  { id: "adyen", name: "Adyen", selected: false },
  { id: "apachespark", name: "Apache Spark", selected: false },
  { id: "logstash", name: "LogStash", selected: false },
  { id: "kafka", name: "Kafka", selected: false },
  { id: "grafana", name: "Grafana", selected: false },
  { id: "socket.io", name: "Socket.io", selected: false },
  { id: "keras", name: "Keras", selected: false },
  { id: "redis", name: "Redis", selected: false },
  { id: "mongodb", name: "MongoDB", selected: false },
  { id: "nginx", name: "Nginx", selected: false },
  { id: "postgresql", name: "PostgreSQL", selected: false },
  { id: "docker", name: "Docker", selected: false },
  { id: "kubernetes", name: "Kubernetes", selected: false },
  { id: "bitbucket", name: "Bitbucket", selected: false },
  { id: "github", name: "GitHub", selected: false },
  { id: "slack", name: "Slack", selected: false },
];

export default class TechnologyPortfolio extends Component {
  constructor(props) {
    super();
    this.state = {
      tags: tags,
      blocks: props.blocks,
      filterBlock: null,
      selectedTag: [],
    };
  }

  // componentDidMount() {
  //   const firstBlock = this.props.blocks.slice(0, 3);
  //   this.setState({ filterBlock: firstBlock });
  // }

  toggleAll = (tag, i, checked) => {
    console.log(tag, i, checked);

    const newTag = this.state.tags;
    newTag[i].selected = !newTag[i].selected;
    this.setState({
      tags: newTag,
    });
    this.filteredBlock(tag.name);
  };

  filteredBlock = (tag) => {
    let newBlockList = [];
    let selection = [];
    this.state.tags.forEach((tag) => {
      if (tag.selected == true) {
        selection.push(tag.name);
      }
    });
    this.state.blocks.map((block) => {
      if (tag) {
        const match = _.intersection(block.technologytags, selection);
        if (match.length) {
          newBlockList.push(block);
        }
      } else {
        newBlockList.push(block);
      }
    });
    // console.log("newblock=>", newBlockList);
    this.setState({ filterBlock: newBlockList, selectedTag: selection });
  };

  render() {
    const { tags } = this.state;
    return (
      <div>
        <div id="technology" class="tabdata technology-tab">
          <ul class="mk-portfolio-domain-tehch">
            {tags &&
              tags.map((tag, i) => (
                <li
                  style={{ cursor: "pointer" }}
                  className={tag.selected ? "tech-active" : ""}
                  onClick={(event) => {
                    this.toggleAll(tag, i, event.target.checked);
                  }}
                  key={i}
                >
                  {tag.name}
                </li>
              ))}
          </ul>
          {!this.state.selectedTag.length && <DefaultTechnology />}
          <div class="mk-portfolio-next-block">
            <div class="row port-custm-marg">
              {this.state.filterBlock &&
                this.state.filterBlock.map((block, i) => (
                  <div key={i} className={block.blockClass}>
                    {block.component({
                      tags: block.technologytags,
                      selectedTag: this.state.selectedTag,
                    })}
                  </div>
                ))}
            </div>
          </div>
          {!this.state.selectedTag && (
            <div class="mk-portfolio-btn">
              <a
                href="javascript:void(0)"
                class="btn mk-load-mo-btn"
                onClick={() => this.filteredBlock()}
              >
                LOAD MORE
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}
