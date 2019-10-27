import React from "react";
import PropTypes from "prop-types";
import rocketImg from "../../../images/rocket.svg"

const PortfolioItem = props => {
  return (
    <React.Fragment>
      <div
        id={props.id}
        className="col-lg-4 col-md-6 col-sm-4 col-6 portfolio-item"
        onClick={props.click}
      >
        <img className="portfolio-item-img" src={props.src} alt="portfolio" />
        <img
          className="portfolio-item-rocket"
          src={rocketImg}
          alt="rocket"
        />
      </div>
    </React.Fragment>
  );
};

export default PortfolioItem;


PortfolioItem.propTypes = {
    id: PropTypes.number.isRequired,
    click: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired
}