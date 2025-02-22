import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { reducer } from "./reducer";

import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";

//? what really is a store?
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
