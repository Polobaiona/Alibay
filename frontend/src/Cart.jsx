import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedCart extends Component {
  constructor(props) {
    super(props);
    this.state = { myCart: [] };
  }

  render = () => {
    this.state.myCart.push(this.props.thisCart)
    let displayCart = this.state.myCart.map(ele => {
       return(<div>{ele}</div>)
    })
    return (
      <div className="cart">
        <div>Items in your cart</div>
        <div>{displayCart}</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { thisCart: state.cart };
};
let Cart = connect(mapStateToProps)(UnconnectedCart);

export default Cart;
