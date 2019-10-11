import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage";
import PortfolioViewPage from "./pages/PortfolioViewPage/PortfolioViewPage";

import { Switch, Route } from "react-router-dom";


export default class Root extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/portfolio" exact component={HomePage} />
          <Route path="/portfolio-view" exact component={PortfolioViewPage} />
        </Switch>
      </React.Fragment>
    );
  }
}
