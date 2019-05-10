import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Cart from "./Cart.jsx";
import SellForm from "./SellItem.jsx";

let renderRoot = () => {
  return (
    <div>
      <h1 className="account-header">Account Details</h1>
      <div className="sell-item">
        <Link to="/sellItem">Sell an item</Link>
      </div>
      <div className="view-cart">
        <Link to="/Cart">View cart</Link>
      </div>
    </div>
  );
};
let renderSellItemForm = () => {
  return (
    <div>
      <SellForm />
    </div>
  );
};

let renderCart = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};
class Account extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/account" render={renderRoot} />
          <Route exact={true} path="/sellItem" render={renderSellItemForm} />
          <Route exact={true} path="/Cart" render={renderCart} />
        </div>
      </BrowserRouter>
    );
  };
}

export default Account;
