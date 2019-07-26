import React, { useState } from "react";

import {addSmurf} from "../actions"

import PropTypes from "prop-types";

function Form({addSmurf}) {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    height: "",
  });
  const handleSubmit = e => {
    e.preventDefault();
    addSmurf(inputs)
  };

  const handleChanges = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="name"
          value={inputs.name}
          onChange={handleChanges}
        />
        <input
          name="age"
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
        <button>submit</button>
      </form>
    </div>
  );
}

Form.propTypes = {};

export default connect({},{addSmurf})(Form);
