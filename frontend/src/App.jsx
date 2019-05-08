import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Categories from "./Categories.jsx";
import Item from "./Item.jsx";
import Account from "./Account.jsx";
import { BrowserRouter, Route, Link } from "react-router-dom";

let renderRoot = () => {
  return (
    <div>
      <div className="flex">
        <h1>Alibay site!!!!</h1>
        <h2> search bar goes here</h2>
        <Link to="/Account">My Account</Link>
      </div>

      <div className="flex">
        <Categories />
        <Item />
      </div>
    </div>
  );
};

let renderAccount = () => {
  return (
    <div>
      <Account />
    </div>
  );
};

class UnconnectedApp extends Component {
  render = () => {
    if (!this.props.lgin) {
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
              <Route exact={true} path="/" render={renderRoot} />
              <Route exact={true} path="/Account" render={renderAccount} />
            </div>
          </BrowserRouter>
        </div>
      );
    }
    /* return(<div> 
        <div>Alibay site!!!!</div>
        <SearchBar />
        <Account />
        <Categories />
        <div>
          <AllItems />
        </div>
      </div>
    )*/
  };
}

let mapStateToProps = state => {
  return { lgin: state.loggedIn };
};

let App = connect(mapStateToProps)(UnconnectedApp);
export default App;
