import React from "react";
import "./Footer.scss"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <span> &copy; {year} Developed by AT</span>
          <span>
            <a href="https://www.freepik.com/free-vector/lovely-galaxy-background-with-flat-design_2859825.htm">
              Background created by freepik
            </a>
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
