import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PortfolioModal = props => {
  let modalHeader_style = { border: "unset" };

  return (
    <React.Fragment>
      <button
        id="modal-btn"
        data-toggle="modal"
        data-target="#portfolio-modal"
        hidden
      ></button>
      <div
        className="modal fade text-white"
        id="portfolio-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolio-modal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={modalHeader_style}>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.click}
              >
                <span aria-hidden="true" className="text-vanila">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body pl-4 pr-4 pb-4">
              <div className="row">
                <div className="col-md-4 col-sm-12 text-center">
                  <img src={props.src} alt="portfolio" />
                </div>

                <div className="col-md-8 col-sm-12">
                  <h4
                    className="modal-title text-vanila mb-4"
                    id="exampleModalLabel"
                  >
                    {props.title}
                  </h4>
                  <p>{props.content}</p>
                  {props.href ? (
                    <Link to={props.href} onClick={props.click}>
                      <button className="btn btn-primary btn-lightpurple mt-3">
                        Preview
                      </button>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PortfolioModal;

PortfolioModal.propTypes = {
  click: PropTypes.func,
  src: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  href: PropTypes.string
};
