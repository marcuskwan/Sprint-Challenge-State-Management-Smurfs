import React, { Component } from "react";
import { connect } from "react-redux";

import { isFetching } from "../actions";

import Smurfs from "./Smurfs";
import Form from "./Form";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>SMURFS! 2.0 W/ Redux</h1> */}
        <Form />
        <Smurfs isFetching={isFetching} />
      </div>
    );
  }
}

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
  { isFetching },
)(App);
