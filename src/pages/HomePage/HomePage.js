import React, { Component } from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Porfolio from "../../components/Portfolio/Portfolio";
import Preloader from "../../components/Preloader/Prealoader";
import $ from "jquery";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this. state = {
      loaded: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      $(".preloader-left, .preloader-right").css(
        "cssText",
        "transition: 1s; width:0"
      );
      $(".preloader-left div , .preloader-right div")
        .delay(400)
        .css("cssText", "transition: .8s; opacity:0");
      $(".preloader")
        .delay(700)
        .fadeOut(400);
      $("html,body").css("overflow", "auto");

      this.setState({ loaded: true });
    }, 500);
  }
  render() {
    const preloader = !this.state.loaded ? <Preloader /> : null;
    return (
      <React.Fragment>
        <Header />
        <Porfolio />
        {preloader}
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
