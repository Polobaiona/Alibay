import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      price: "loading ...",
      allCart: []
    };
  }

  componentDidMount = () => {
    console.log("fetching item details");
    let data = new FormData();
    data.append("_id", this.props.path);
    console.log("props.path", this.props.path);
    fetch("http://localhost:4000/ItemDetails", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        console.log("rendering item details");
        console.log(responseBody);
        let body = JSON.parse(responseBody);
        let itemDetails = body.result;
        console.log("Picture of kevin: " + itemDetails.url);
        this.setState({
          url: itemDetails.url,
          price: itemDetails.price,
          description: itemDetails.description,
          name: itemDetails.name
        });
      });
  };
  addToCartHandler = () => {
    let cart = this.props.cart
    cart.push(this.state)
    console.log(cart)
    alert("Item added to cart!");
    this.props.dispatch({
      type: "addToCart",
      addCart: cart
    })
  }

  render = () => {
    let url = "http://localhost:4000" + this.state.url;
    return (
      <div className="cart-outer">
        <img className="cart-img" src={url} />
        <div>
          <div className="cart-name">{this.state.name}</div>
          <div className="cart-inner">{this.state.price}</div>
          <div className="cart-inner">{this.state.description}</div>
          <div className="cart-inner">
            <button onClick={this.addToCartHandler}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  console.log(state);
  return {
    cart: state.cart
  };
};
let ItemDetails = connect(mapStateToProps)(UnconnectedItemDetails);
export default ItemDetails;
