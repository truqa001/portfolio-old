import React from "react";
import { FaBars } from "react-icons/fa";
import PropTypes from "prop-types";

const HamburgerButton = props => {
  let spanStyles = {
    paddingLeft: "2px",
    paddingBottom: "10px"
  };

  return (
    <React.Fragment>
      <div className="nav-btn-container">
        <div className="nav-open" onClick={props.onOpenClick}>
          <FaBars size="38" />
        </div>

        <div className="nav-close" onClick={props.onCloseClick}>
          <span style={spanStyles}>X</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HamburgerButton;

HamburgerButton.propTypes = {
    onOpenClick: PropTypes.func,
    onCloseClick: PropTypes.func
}