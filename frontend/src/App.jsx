import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

class UnconnectedApp extends Component {
  render = () => {
    if (!this.props.lgin) {
      return (
        <div>
          <h1>Welcome to Alibay</h1>
          <Signup /> <br />
          <Login />
        </div>
      );
    } else {
      return <div>Alibay site!!!!</div>;
    }
  };
}

let mapStateToProps = state => {
  return { lgin: state.loggedIn };
};

let App = connect(mapStateToProps)(UnconnectedApp);
export default App;
