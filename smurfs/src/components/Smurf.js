import React from "react";
import PropTypes from "prop-types";

function Smurf({ smurf }) {
  return (
    <div className="smurf">
      <div className="name">{smurf.name}</div>
      <div className="age">{smurf.age}</div>
      <div className="height">{smurf.height}</div>
    </div>
  );
}

Smurf.propTypes = {};

export default Smurf;
