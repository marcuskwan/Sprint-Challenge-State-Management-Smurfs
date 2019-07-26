import React, { useEffect } from "react";
import { connect } from "react-redux";

import Smurf from "./Smurf"

import { fetchSmurf } from "../actions";

import PropTypes from "prop-types";

function Smurfs({ fetchSmurf, data }) {
  useEffect(() => {
    fetchSmurf();
  }, []);
  return <div>
    {data.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}
  </div>;
}

Smurfs.propTypes = {};

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
