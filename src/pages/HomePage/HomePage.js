import React from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Porfolio from "../../components/Portfolio/Portfolio";
import PreLoader from "../../components/Preloader/Prealoader";

const HomePage = () => (
  <React.Fragment>
    <Header />
    <Porfolio />
    <PreLoader />
    <Footer />
  </React.Fragment>
);

export default HomePage;
