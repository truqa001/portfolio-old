import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage";
import PortfolioViewPage from "./pages/PortfolioViewPage/PortfolioViewPage";

import { Switch, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Prealoader";
import { CustomPreloader } from "react-preloaders";

export default class Root extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/portfolio" exact component={HomePage} />
          <Route path="/portfolio-view" exact component={PortfolioViewPage} />
        </Switch>

        <CustomPreloader>
            <Preloader />
          </CustomPreloader>
      </React.Fragment>
    );
  }
}
