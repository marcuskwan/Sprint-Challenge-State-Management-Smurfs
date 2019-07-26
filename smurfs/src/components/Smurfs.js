import React, { useEffect } from "react";
import { connect } from "react-redux";

import Smurf from "./Smurf";

import { fetchSmurf } from "../actions";

import PropTypes from "prop-types";

function Smurfs({ fetchSmurf, data }) {
  //? what does the useEffect warning mean?
  useEffect(() => {
    fetchSmurf();
    //? if an empty [] runs only once and no arguments rerenders whenever state or props change, why is there a rerender when data changes?
  }, []);
  return (
    <div>
      {data.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
}

Smurfs.propTypes = {
  data: PropTypes.array,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  isAdding: PropTypes.bool,
  isUpdating: PropTypes.bool,
  isDeleting: PropTypes.bool,
  fetchSmurf: PropTypes.func
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error,
    isFetching: state.isFetching,
    isAdding: state.isAdding,
    isUpdating: state.isUpdating,
    isDeleting: state.isDeleting,
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf },
)(Smurfs);
