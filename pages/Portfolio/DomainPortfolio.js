import React, { Component } from "react";

import * as _ from "lodash";
import  DefaultDomain  from "./Components/DefaultDomain.js";
const taglist = [
  { id: "fintech", name: "Fintech", selected: false },
  { id: "enterprise", name: "Enterprise", selected: false },
  { id: "realestate", name: "Real Estate", selected: false },
  { id: "machinelearning", name: "Machine Learning", selected: false },
  { id: "Big Data", name: "BigData", selected: false },
  { id: "R &D", name: "R &D", selected: false },
  { id: "IOT", name: "IOT", selected: false },
  { id: "Education", name: "Education", selected: false },
  { id: "Wireless", name: "Wireless", selected: false },
  { id: "Retail", name: "Retail", selected: false },
  { id: "Marketplace", name: "Marketplace", selected: false },
  { id: "Blockchain", name: "Blockchain", selected: false },
  { id: "Supplychain", name: "Supplychain", selected: false },
  { id: "DevOps", name: "DevOps", selected: false },
  { id: "Gaming", name: "Gaming", selected: false },
  { id: "Data Science", name: "Data Science", selected: false },
  { id: "Product Design", name: "Product Design", selected: false },
  { id: "Crypto asset", name: "Crypto Asset", selected: false },
  { id: "Billing", name: "Billing", selected: false },
  {
    id: "Natural Language Processing",
    name: "Natural Language Processing",
    selected: false,
  },
  { id: "Cloud", name: "Cloud", selected: false },
  { id: "MVP", name: "MVP", selected: false },
  {
    id: "Artifical Intelligence",
    name: "Artifical Intelligence",
    selected: false,
  },
  { id: "Trading", name: "Trading", selected: false },
  { id: "IT Security", name: "IT Security", selected: false },
  { id: "Network  Security", name: "Network  Security", selected: false },
  { id: "RPA", name: "RPA", selected: false },
];

export default class DomainPortfolio extends Component {
  constructor(props) {
    super();
    this.state = {
      tags: taglist,
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
        const match = _.intersection(block.domaintags, selection);
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
    console.log(tags);
    return (
      <div>
        <div id="domain" class="tabdata">
          <ul class="mk-portfolio-domain-tehch">
            {this.state.tags &&
              this.state.tags.map((tag, i) => (
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
          {!this.state.selectedTag.length && <DefaultDomain />}
          <div class="mk-portfolio-next-block">
            <div class="row port-custm-marg">
              {this.state.filterBlock &&
                this.state.filterBlock.map((block, i) => (
                  <div key={i} className={block.blockClass}>
                    {block.component({
                      tags: block.domaintags,
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
