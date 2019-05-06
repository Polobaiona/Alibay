import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

class UnconnectedApp extends Component {
  render = () => {
    return (
      <div>
        <h1>Welcome to Alibay</h1>
        <Signup /> <br />
        <Login />
      </div>
    );
  };
}

let App = connect()(UnconnectedApp);
export default App;
