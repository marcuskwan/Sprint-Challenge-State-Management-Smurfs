import React, { Component } from "react";
import {connect} from "react-redux"

import Smurfs from "./Smurfs";
import Form from "./Form";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>SMURFS! 2.0 W/ Redux</h1> */}
        <Form />
        <Smurfs />
      </div>
    );
  }
}

export default connect()(App);
