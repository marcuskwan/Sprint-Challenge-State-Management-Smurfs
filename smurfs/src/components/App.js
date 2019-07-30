import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Smurfs from "./Smurfs";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="message">
          {this.props.message && this.props.message}
        </div>
        <div className="error">{this.props.error && this.props.error}</div>
        <Form />
        <Smurfs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  {},
)(App);
