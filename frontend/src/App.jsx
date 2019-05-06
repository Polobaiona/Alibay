import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Categories from "./Categories.jsx";

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
          <div>Alibay site!!!!</div>

          <div className="flex">
            <Categories />
            <div> items </div>
          </div>
        </div>
      );
    }
    /* return(<div> 
        <div>Alibay site!!!!</div>
        <SearchBar />
        <Account />
        <Categories />
        <div>
          <AllItem />
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
