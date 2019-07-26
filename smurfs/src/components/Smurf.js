import React from "react";
import { connect } from "react-redux";

import { editSmurf, deleteSmurf } from "../actions";

import PropTypes from "prop-types";

function Smurf({ smurf, id, deleteSmurf }) {
  return (
    <div className="smurf">
      <div className="name">{smurf.name}</div>
      <div className="age">{smurf.age}</div>
      <div className="height">{smurf.height}</div>
      <button className="edit" onClick={() => editSmurf(id)}>
        edit
      </button>
      <button className="delete" onClick={() => deleteSmurf(id)}>
        delete
      </button>
    </div>
  );
}

Smurf.propTypes = {
  smurf: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string,
  }),
  id: PropTypes.number,
  editSmurf: PropTypes.func,
  deleteSmurf: PropTypes.func,
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { deleteSmurf },
)(Smurf);
