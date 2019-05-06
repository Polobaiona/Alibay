import React, { Component } from "react"; // 1
import { connect } from "react-redux";

class UnconnectedLogin extends Component {
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

    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    fetch("http://localhost:4000/login", {
      method: "POST",
      body: data
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);

        if (!body.success) {
          alert("login failed");
          return;
        }
        this.props.dispatch({ type: "login-success" });
      });
  };

  render = () => {
    return (
      <div>
        <h3>Login</h3>
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

let Login = connect()(UnconnectedLogin);
export default Login;
