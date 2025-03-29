import React from "react";
import "./index.css";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div
      className="loading-bg-con d-flex align-items-center justify-content-center"
      aria-label="Loading Spinner"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;