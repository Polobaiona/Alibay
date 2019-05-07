import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Cart from "./Cart.jsx";

let renderRoot = () => {
  return (
    <div>
      <div>Welcome (your name here)</div>
      <div>
        <Link to="/sellItem">To sell an item click this here </Link>
      </div>
      <div>
        <Link to="/viewCart">Click here to view cart</Link>
      </div>
    </div>
  );
};
let renderSellItemForm = () => {
  return <div>placeholder form</div>;
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
          <Route exact={true} path="/viewCart" render={renderCart} />
        </div>
      </BrowserRouter>
    );
  };
}

export default Account;