import React, {useEffect} from "react";
import PortfolioBackground from "./PortfolioBackground/PortfolioBackground";
import PortfolioLeft from "./PortfolioLeft/PortfolioLeft";
import PortfolioRight from "./PortfolioRight/PortfolioRight";
import Parallax from "parallax-js";
import "./Portfolio.scss";

const Portfolio = () => {
  let portfolioStyle = { position: "relative" };

  useEffect(() => {
    let scene = document.getElementById("scene");
    let parallaxInstance = new Parallax(scene);
    let scene2 = document.getElementById("scene2");
    let parallaxInstance2 = new Parallax(scene2);
  }, [])

  return (
    <React.Fragment>
      <div id="portfolio" className="portfolio space" style={portfolioStyle}>
        <PortfolioBackground />
        <div className="container">
          <div className="row">
            <PortfolioLeft />
            <PortfolioRight />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
