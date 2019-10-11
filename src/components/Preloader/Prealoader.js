import React, { useEffect } from "react";
import "./Preloader.scss";
import $ from "jquery";

const Preloader = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      
    });
  }, []);

  return (
    <React.Fragment>
      <div className="preloader">
        <div className="preloader-left">
          <div>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
          </div>
        </div>

        <div className="preloader-right">
          <div>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Preloader;
