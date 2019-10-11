import React from "react";
import PropTypes from "prop-types";
import "./SampleView.scss"

const SampleView = props => {
  return (
    <div className="iframe-container">
      <iframe src={props.src}></iframe>
    </div>
  );
};
export default SampleView;

SampleView.propTypes = {
  src: PropTypes.string
};
