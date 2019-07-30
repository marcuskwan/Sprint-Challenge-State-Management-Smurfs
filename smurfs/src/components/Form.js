import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf, editSmurf, clearEditing } from "../actions";

import PropTypes from "prop-types";

function Form({ addSmurf, editSmurf, editingSmurf, clearEditing }) {
  console.log("in form, editingSmurf:", editingSmurf);

  const [inputs, setInputs] = useState({
    name: editingSmurf.name || "",
    age: editingSmurf.age || "",
    height: editingSmurf.height || "",
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (editingSmurf.name) {
      editSmurf(editingSmurf.id, inputs);
    } else {
      addSmurf(inputs);
    }
    setInputs({
      name: editingSmurf.name || "",
      age: editingSmurf.age || "",
      height: editingSmurf.height || "",
    });
    clearEditing();
  };

  const handleChanges = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setInputs({
      name: "",
      age: "",
      height: "",
    });
    clearEditing();
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
        <button className="clear" type="button" onClick={handleClear}>
          clear
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  addSmurf: PropTypes.func,
  editSmurf: PropTypes.func,
  editingSmurf: PropTypes.object,
  clearEditing: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    editingSmurf: state.editingSmurf,
  };
};

export default connect(
  mapStateToProps,
  { addSmurf, editSmurf, clearEditing },
)(Form);
