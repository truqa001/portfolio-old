import React, {Component} from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Porfolio from "../../components/Portfolio/Portfolio";
import Preloader from "../../components/Preloader/Prealoader"

import $ from "jquery"

class HomePage extends Component {
    componentDidMount() {
        setTimeout(function() {
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
          }, 400);
    }

    render () {
        return (
          <React.Fragment>
            <Header />
            <Porfolio />
            <Preloader/>
            <Footer />
          </React.Fragment>
        );
    }
}


export default HomePage;
