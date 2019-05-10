import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedItemCollection extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    console.log("category: ", this.props.category);
    let filteredItems = this.props.allItems;
    if (this.props.category) {
      filteredItems = filteredItems.filter(ele => {
        return ele.category === this.props.category;
      });
    }
    let searchFiltered = filteredItems.filter(ele => {
      return ele.name.includes(this.props.query);
    });
    console.log(searchFiltered);
    return searchFiltered.map(ele => {
      let url = "http://localhost:4000" + ele.url;
      let linkTo = "/ItemDetails/" + ele._id;
      return (
        <div className="details">
          <div>
            <div> {ele.name}</div>
            <img className="img" src={url} />
            <div>{ele.price}</div>
          </div>
          <Link to={linkTo}>Item Details</Link>
        </div>
      );
    });
  };
}

let mapStateToProps = state => {
  console.log("item collection redux state", state);
  return {
    category: state.category,
    query: state.querySearch,
    allItems: state.allItems
  };
};
let ItemCollection = connect(mapStateToProps)(UnconnectedItemCollection);

export default ItemCollection;
