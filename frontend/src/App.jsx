import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Categories from "./Categories.jsx";
import ItemCollection from "./ItemCollection.jsx";
import Account from "./Account.jsx";
import SearchBar from "./SearchBar.jsx";
import { BrowserRouter, Route, Link } from "react-router-dom";

class UnconnectedApp extends Component {
  renderAccount = () => <Account />

  renderRoot = () => {
    console.log("app props", this.props);
    return (
      <div>
        <div className="flex">
          <h1>Alibay site!!!!</h1>
          <SearchBar />
          <Link to="/Account">My Account</Link>
        </div>

        <div className="flex">
          <Categories />
          <ItemCollection />
        </div>
      </div>
    );
  };

  render = () => {
    if (!this.props.loggedIn) {
      return (
        <div>
          <h1>Welcome to Alibay</h1>
          <Signup />
          <Login />
        </div>
      );
    } else {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Route exact={true} path="/" render={this.renderRoot} />
              <Route exact={true} path="/Account" render={this.renderAccount} />
            </div>
          </BrowserRouter>
        </div>
      );
    }
  };
}

let mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

let App = connect(mapStateToProps)(UnconnectedApp);
export default App;
