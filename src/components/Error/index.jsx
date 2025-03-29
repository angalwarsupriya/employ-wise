import React from "react";
import "./index.css";

const Error = ({ msg }) => {
  return (
    <div
      className="error-bg-con d-flex flex-column align-items-center justify-content-center"
      aria-label="Error Message"
    >
      <img
        src="images/error.png"
        alt="Error icon"
        className="img"
      />
      <p>{msg}</p>
    </div>
  );
};

export default Error;