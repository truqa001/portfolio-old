import React from "react";
import PropTypes from "prop-types";
import "./TopBar.scss";
import { FaMobileAlt, FaDesktop, FaWindowClose } from "react-icons/fa";

const TopBar = props => {
  const style = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)"
  };

  const a_style = {
    float: "right"
  };

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

      <a href="/portfolio">
        <span
          className="mr-4"
          style={a_style}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Exit Preview"
        ><FaWindowClose/></span>
      </a>
    </div>
  );
};
export default TopBar;

TopBar.propTypes = {
  mobileClick: PropTypes.func,
  pcClick: PropTypes.func
};
