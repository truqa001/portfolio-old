import React, { useEffect } from "react";
import "./Preloader.scss";

const Preloader = () => {
  useEffect(() => {
    //   setTimeout(function() {
    //     $(".preloader-left, .preloader-right").css(
    //       "cssText",
    //       "transition: 1s; width:0"
    //     );
    //     $(".preloader-left div , .preloader-right div")
    //       .delay(400)
    //       .css("cssText", "transition: .8s; opacity:0");
    //     $(".preloader")
    //       .delay(700)
    //       .fadeOut(400);
    //     $("html,body").css("overflow", "auto");
    //   }, 1400);
   
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
