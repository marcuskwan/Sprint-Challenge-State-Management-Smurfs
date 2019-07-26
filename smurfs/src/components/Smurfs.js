import React, { useEffect } from "react";
import axios from "axios";

import PropTypes from "prop-types";

function Smurfs(props) {
  useEffect(() => {
    axios
      .get("//localhost:3333/smurfs")
      .then(res => console.log("get success:", res))
      .catch(err => console.log(err));
  }, []);
  return <div />;
}

Smurfs.propTypes = {};

export default Smurfs;
