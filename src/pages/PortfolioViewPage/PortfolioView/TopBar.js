import React from "react";
import PropTypes from "prop-types";
import "./TopBar.scss";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaDesktop, FaWindowClose } from "react-icons/fa";
import $ from "jquery";

const TopBar = props => {
  const style = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)"
  };

  const a_style = {
    float: "right"
  };

  const close_portfolio_view = () => {
    $(".tooltip").remove();
  }

  return (
    <div className="portfolio-view">
      <div
        className="logo"
        data-toggle="tooltip"
        data-placement="bottom"
        title="I'm Anthony :)"
      />

      <div style={style}>
        <span
          data-toggle="tooltip"
          data-placement="bottom"
          title="Switch to Mobile"
          onClick={props.mobileClick}
        >
          <FaMobileAlt />
        </span>

        <span
          data-toggle="tooltip"
          data-placement="bottom"
          title="Switch to PC"
          onClick={props.pcClick}
        >
          <FaDesktop />
        </span>
      </div>

      <Link to="/portfolio" onClick={close_portfolio_view}>
        <span
          className="mr-4"
          style={a_style}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Exit Preview"
        >
          <FaWindowClose />
        </span>
      </Link>
    </div>
  );
};
export default TopBar;

TopBar.propTypes = {
  mobileClick: PropTypes.func,
  pcClick: PropTypes.func
};
