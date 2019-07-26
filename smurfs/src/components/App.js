import React, { Component } from "react";

import Form from "./Form";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form editSmurf={this.props.editSmurf} />
      </div>
    );
  }
}

export default App
