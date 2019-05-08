import React, { Component } from "react";
import { connect } from "react-redux";
let items = [];

fetch("http://localhost:4000/items")
  .then(x => {
    return x.text();
  })
  .then(responseBody => {
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
  }

  componentDidUpdate() {
    console.log("in update", this.props);
  }

  render = () => {
    console.log(this.props.category);
    let filteredItems = items;

    if (this.props.category) {
      filteredItems = items.filter(ele => {
        return ele.category === this.props.category;
      });
    }
    let searchFiltered = filteredItems.filter(ele => {
      return(ele.name.includes(this.props.query)) 
    })
    console.log(searchFiltered);
    return searchFiltered.map(ele => {
      let url = "http://localhost:4000" + ele.url;
      return (
        <div>
          <Link to="/ItemDetails" >
          <div className="name"> {ele.name}</div>
          <img className="img" src={url} /></Link>
          <div>{ele.price}</div>
        </div>
      );
    });
  };
}

let mapStateToProps = state => {
  console.log("itemcollection redux state", state);
  return { 
    category: state.category,
    query: state.querySearch
   };
};
let ItemCollection = connect(mapStateToProps)(UnconnectedItemCollection);

export default ItemCollection;
