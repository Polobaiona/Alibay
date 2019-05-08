import React, { Component } from "react";
import { connect } from "react-redux";
let itemCategory = [];

fetch("http://localhost:4000/items", { method: "GET" })
  .then(x => {
    return x.text();
  })
  .then(responseBody => {
    console.log("hello");
    let body = JSON.parse(responseBody);

    let itemArray = body.itemDetails;
    console.log(itemArray);

    itemArray.map(item => {
      itemCategory.push(item);
    });
  });

class UnconnectedItemCollection extends Component {
  constructor(props) {
    super(props);
    this.state = { category: "" };
  }

  //pull items from server(MongoDB)
  //filter items by category
  //display items (name, price, picture, id onClick)

  //onClick -> <ItemDetails /> (import ItemDetails)

  render = () => {
    return itemCategory.map(ele => {
      let url = "http://localhost:4000" + ele.url;
      return (
        <div>
          <div> {ele.name}</div>
          <img className="img" src={url} />
          <div>{ele.price}</div>
        </div>
      );
    });
  };
}

let mapStateToProps = state => {
  return { category: state.category };
};

let ItemCollection = connect(mapStateToProps)(UnconnectedItemCollection);

export default ItemCollection;
