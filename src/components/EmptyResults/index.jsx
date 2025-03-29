import React from "react";
import "./index.css";

const EmptyResults = () => {
  return (
    <div
      className="text-center d-flex flex-column text-muted mt-con"
      aria-label="No Results Found"
    >
      <img
        src="images/nodata.jpg"
        alt="No data available"
        className="img"
      />
      <p>No users found.</p>
    </div>
  );
};

export default EmptyResults;