import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

class UnconnectedItemCollection extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("in update", this.props);
  }

  renderItemDetails = () => <ItemDetails />

  render = () => {
    console.log(this.props.category);
    console.log(this.props.allItems)
    let filteredItems = this.props.allItems
    console.log(filteredItems)
    if (this.props.category) {
      filteredItems = filteredItems.filter(ele => {
        return ele.category === this.props.category;
      });
    }
    let searchFiltered = filteredItems.filter(ele => {
      return(ele.name.includes(this.props.query)) 
    })
    console.log(searchFiltered);
    return searchFiltered.map(ele => {
      let url = "http://localhost:4000" + ele.url;
      return (<BrowserRouter>
        <div>
          <Link to="/ItemDetails"><div className="name"> {ele.name}</div>
          <img className="img" src={url} /></Link>
          <div>{ele.price}</div>
          <Route exact={true} path="/ItemDetails" render={this.renderItemDetails} />
        </div></BrowserRouter>
      );
    });
  };
}

let mapStateToProps = state => {
  console.log("itemcollection redux state", state);
  return { 
    category: state.category,
    query: state.querySearch,
    allItems: state.allItems
   };
};
let ItemCollection = connect(mapStateToProps)(UnconnectedItemCollection);

export default ItemCollection;
