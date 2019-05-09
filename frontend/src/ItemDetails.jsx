import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      price: "please fix me",
      description: "this is not working as intended",
      name: "hello"
    };
  }

  componentDidMount = () => {
    let itemArray = [];
    fetch("http://localhost:4000/ItemDetails")
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        console.log("rendering item details");
        let body = JSON.parse(responseBody);
        this.setState({
          price: body.price,
          description: body.description,
          name: body.name,
          url: body.url
        });
      });
  };

  render = () => {
    let url = "http://localhost:4000" + this.state.url;
    return (
      <div>
        <img className="img" src={url} />
        <div>{this.state.name}</div>
        <div>{this.state.price}</div>
        <div>{this.state.description}</div>
      </div>
    );
  };
}
let ItemDetails = connect()(UnconnectedItemDetails);
export default ItemDetails;
