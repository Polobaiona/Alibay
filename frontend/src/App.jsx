import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Categories from "./Categories.jsx";
import ItemCollection from "./ItemCollection.jsx";
import Account from "./Account.jsx";
import SearchBar from "./SearchBar.jsx";
import ItemDetails from "./ItemDetails.jsx";
import { BrowserRouter, Route, Link } from "react-router-dom";

class UnconnectedApp extends Component {
  componentDidMount = () => {
    let itemArray = [];
    fetch("http://localhost:4000/items")
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        console.log("rendering all items");
        console.log(responseBody);
        let body = JSON.parse(responseBody);
        console.log(body);
        let items = body.itemDetails;
        console.log(itemArray);

        items.map(item => {
          itemArray.push(item);
        });
      });
    this.props.dispatch({
      type: "fetchItems",
      items: itemArray
    });
  };
  renderAccount = () => <Account />;

  renderItemDetails = routerData => {
    let path = routerData.match.params.itemId;
    return <ItemDetails path={path} />;
  };

  renderRoot = () => {
    console.log("app props", this.props);
    return (
      <div>
        <div className="flex top-bar">
          <div className="search-bar">
            <SearchBar />
          </div>
          <h1 className="site-header">Alibay</h1>

          <div className="account-link">
            <Link to="/Account">
              <p>My Account</p>
            </Link>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="container">Categories</div>
            <div className="move-right">
              <Categories />
            </div>
          </div>
          <div className="wrapper top-spacing">
            <ItemCollection />
          </div>
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
              <Route
                exact={true}
                path="/ItemDetails/:itemId"
                render={this.renderItemDetails}
              />
            </div>
          </BrowserRouter>
        </div>
      );
    }
  };
}

let mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    allItems: state.allItems
  };
};

let App = connect(mapStateToProps)(UnconnectedApp);
export default App;
