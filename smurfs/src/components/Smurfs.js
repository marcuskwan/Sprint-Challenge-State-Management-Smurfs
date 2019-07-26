import React, { useEffect } from "react";

import PropTypes from "prop-types";

function Smurfs({ isFetching }) {
  useEffect(() => {
    console.log(isFetching);
  }, []);
  return <div />;
}

Smurfs.propTypes = {};

export default Smurfs;
