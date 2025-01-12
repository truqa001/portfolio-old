import React, { Component } from "react";

import TopBar from "./PortfolioView/TopBar";
import SampleView from "./PortfolioView/SampleView";

import $ from "jquery";
import { portfolioDataUrls } from "../portfolioDataUrls";

export default class PortfolioViewPage extends Component {
  constructor(props) {
    super(props);

    let url_string = window.location.href;
    let url = new URL(url_string);
    let mobileView = false;

    this.portfolio_id = parseInt(url.searchParams.get("id"));

    if (this.portfolio_id === 1 || this.portfolio_id === 2) {
      mobileView = !mobileView;
    }

    this.state = {
      items: [...portfolioDataUrls],
      mobileView: mobileView
    };
  }

  setMobileView = bool => {
    this.setState({ mobileView: bool });
  };

  searchItem = () => {
    const itemIndex = this.state.items.findIndex(item => {
      return item.id === this.portfolio_id;
    });
    return { ...this.state.items[itemIndex] };
  };

  switch_to_pc = () => {
    $("iframe").css(
      "cssText",
      "width:100vw; height: 100vh; top: 50px; border:unset;"
    );
    this.setMobileView(false);
  };

  switch_to_mobile = () => {
    $("iframe").css(
      "cssText",
      "width:325px; height: 592px; top: 80px; border:1px solid var(--vanila)"
    );
    this.setMobileView(true);
  };

  componentDidMount() {
    window.scrollTo(0, 0)
    this.state.mobileView ? this.switch_to_mobile() : this.switch_to_pc();
  }

  render() {
    $(window).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    return (
      <React.Fragment>
        <TopBar
          mobileClick={this.switch_to_mobile}
          pcClick={this.switch_to_pc}
        />
        <SampleView src={this.searchItem().src} />
      </React.Fragment>
    );
  }
}
