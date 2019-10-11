import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import "./SampleView.scss";
import Spinner from "../../../components/Spinner/Spinner"

const SampleView = props => {

  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    
  }, [])
  return (
    <div className="iframe-container">
      {loading ? <Spinner/> : null}
      <iframe src={props.src} onLoad={() => setLoading(false)}></iframe>
    </div>
  );
};
export default SampleView;

SampleView.propTypes = {
  src: PropTypes.string
};
