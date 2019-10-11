import React from "react";

const BackToTop = () => {
  let style = { display: "none" };
  return (
    <React.Fragment>
      <div
        className="backtotop"
        style={style}
        onClick={() => $(window).scrollTop(0)}
      >
        <span>
          <i className="fas fa-angle-double-up"></i>
        </span>
      </div>
    </React.Fragment>
  );
};
export default BackToTop;
