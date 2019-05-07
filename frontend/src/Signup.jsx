import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    console.log("hit signup");
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    fetch("http://localhost:4000/signup", { method: "POST", body: data });
    alert("signup successful!");
    this.props.dispatch({ type: "login-success" });
  };

  render = () => {
    return (
      <div>
        <h3>Sign-up</h3>
        <form onSubmit={this.handleSubmit}>
          Username:
          <input type="text" onChange={this.handleUsernameChange} />
          Password:
          <input type="text" onChange={this.handlePasswordChange} />
          <input type="submit" />
        </form>
      </div>
    );
  };
}
let Signup = connect()(UnconnectedSignup);
export default Signup;
