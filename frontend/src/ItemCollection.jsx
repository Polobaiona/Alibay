import React, { Component } from "react";
import { connect } from "react-redux";
let items = [];

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
      items.push(item);
    });
  });

class UnconnectedItemCollection extends Component {
  constructor(props) {
    super(props);
    // this.state = { category: "" };
  }

  componentDidUpdate() {
    console.log("in update", this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render = () => {
    console.log(this.props.category);
    let filteredItems = [];

    if (this.props.category === undefined) {
      console.log("undefined category");
      filteredItems = items.map(ele => {
        return ele;
      });
    } else {
      filteredItems = items.filter(ele => {
        return ele.category === this.props.category;
      });
    }

    console.log(filteredItems);
    return filteredItems.map(ele => {
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
  console.log("itemcollection redux state", state);
  return { category: state.category };
};

let ItemCollection = connect(mapStateToProps)(UnconnectedItemCollection);

export default ItemCollection;
