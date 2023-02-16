import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TopBar.scss";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaDesktop, FaWindowClose } from "react-icons/fa";
import $ from "jquery";
import { portfolioDataUrls } from "../../portfolioDataUrls";

const TopBar = props => {
  const url_string = window.location.href;
  const url = new URL(url_string);
  const portfolio_id = parseInt(url.searchParams.get("id"));
  console.log(portfolio_id)
  const [links, setLinks] = useState(
    [...portfolioDataUrls]
  );

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

  const getSrc = () => {
    return links.find(item => item.id === portfolio_id).src
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

        <span
          data-toggle="tooltip"
          data-placement="bottom"
          title="Go to the site"
          style={{ fontSize: "20px", fontWeight: 'normal' }}
        >
          <a href={getSrc()}>Live</a>
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
