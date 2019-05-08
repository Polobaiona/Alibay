import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedSellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      description: "",
      category: undefined
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handlePriceChange = event => {
    event.preventDefault();
    if (isNaN(event.target.value))
      return alert("Price is not a number, enter another price");

    this.setState({ price: event.target.value });
  };
  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };
  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };
  handleOnSubmit = evt => {
    evt.preventDefault();
    if (this.state.category === undefined) {
      alert("Enter a category!");
      return;
    }
    let data = new FormData();
    data.append("name", this.state.name);
    data.append("price", this.state.price);
    data.append("description", this.state.description);
    data.append("category", this.state.category);
    fetch("http://localhost:4000/newItem", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    alert("Item put up for sale!");
    console.log(this.state);
  };

  render = () => {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          Name of Item
          <input type="text" onChange={this.handleNameChange} />
        </div>
        <div>
          Price
          <input type="text" onChange={this.handlePriceChange} />
        </div>
        <div>
          Description of item
          <input type="text" onChange={this.handleDescriptionChange} />
        </div>
        <div>
          {" "}
          Choose a category
          <select required name="dropdown" onChange={this.handleCategoryChange}>
            <option value="undefined">---------</option>
            <option value="sport">sport</option>
            <option value="electronic">electronic</option>
            <option value="kitchen">kitchen</option>
            <option value="bathroom">bathroom</option>
            <option value="pet">pet</option>
            <option value="car">car</option>
            <option value="other">other</option>
          </select>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    );
  };
}

let SellForm = connect()(UnconnectedSellItem);

export default SellForm;
