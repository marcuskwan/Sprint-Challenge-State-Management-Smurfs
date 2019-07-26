import React, { useEffect, useDispatch } from "react";

import { isFetching } from "../actions";

import PropTypes from "prop-types";

function Smurfs(props) {
  useEffect(() => {
    isFetching();
  }, []);
  return <div />;
}

Smurfs.propTypes = {};

export default Smurfs;
