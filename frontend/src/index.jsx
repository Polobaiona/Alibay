/*import ReactDOM from 'react-dom'
import './main.css'
import React, { Component } from 'react'
ReactDOM.render(<div>Hello World!</div>, document.getElementById("root"))
*/

import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./App.jsx";
import "./main.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
