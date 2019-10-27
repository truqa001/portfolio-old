import React, { Component } from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Porfolio from "../../components/Portfolio/Portfolio";


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Porfolio />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
