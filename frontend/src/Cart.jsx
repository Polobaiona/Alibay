import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedCart extends Component {
  constructor(props) {
    super(props);
    this.state = { thisCart: [] };
  }

  render = () => {
    let cartDisplay = this.props.thisCart.map(ele => {
      return <div>{ele}</div>;
    });

    return (
      <div>
        <div>Items in your cart</div>
        <div>{cartDisplay}</div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { thisCart: state.cart };
};
let Cart = connect(mapStateToProps)(UnconnectedCart);

export default Cart;
