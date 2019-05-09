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
        console.log(itemDetails);
        this.setState({
          url: itemDetails.url,
          price: itemDetails.price,
          description: itemDetails.description,
          name: itemDetails.name
        });
      });
  };
  addToCartHandler = () => {
    this.state.allCart.push(this.state)
    console.log(this.state.allCart)
    this.props.dispatch({
      type: "addToCart",
      addCart: this.state.allCart
    })
  }

  render = () => {
    let url = "http://localhost:4000" + this.state.url;
    return (
      <div>
        <img className="img" src={url} />
        <div>{this.state.name}</div>
        <div>{this.state.price}</div>
        <div>{this.state.description}</div>
        <button onClick={this.addToCartHandler}>Add to Cart</button>
      </div>
    );
  };
}
let ItemDetails = connect()(UnconnectedItemDetails);
export default ItemDetails;
