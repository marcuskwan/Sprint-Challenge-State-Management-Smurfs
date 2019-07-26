import React, { useState } from "react";
import PropTypes from "prop-types";

function Form(props) {
  const [inputs, setInputs] = {
    name: "",
    age: "",
    height: "",
  };

  const handleSubmit = e => {
    e.preventDefault();
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
      </form>
    </div>
  );
}

Form.propTypes = {};

export default Form;
