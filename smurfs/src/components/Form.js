import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

import PropTypes from "prop-types";

function Form({ addSmurf }) {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    height: "",
  });
  const handleSubmit = e => {
    e.preventDefault();
    addSmurf(inputs);
  };

  const handleChanges = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="name"
          value={inputs.name}
          onChange={handleChanges}
        />
        <input
          name="age"
          //? where in the server does it say that you can't have a same name smurf or not have a string as a number input? 
          type="number"
          placeholder="age"
          value={inputs.age}
          onChange={handleChanges}
        />
        <input
          name="height"
          placeholder="height"
          value={inputs.height}
          onChange={handleChanges}
        />
        <button className="submit">submit</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  addSmurf: PropTypes.func,
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addSmurf },
)(Form);
