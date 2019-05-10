import { connect } from "react-redux";
import React, { Component } from "react";

class UnconnectedSearchBar extends Component {
  constructor(props) {
    super(props);
  }
  handleSearchChange = evt => {
    console.log(evt.target.value);
    this.props.dispatch({
      type: "qSearch",
      q: evt.target.value
    });
  };
  render = () => {
    return (
      <div className="flex">
        <form onSubmit={this.handleSubmit}>
          <div className="flex">
            <div className="search-color">Search items</div>
            <div>
              <input onChange={this.handleSearchChange} type="text" />
            </div>
          </div>
        </form>
      </div>
    );
  };
}
let SearchBar = connect()(UnconnectedSearchBar);
export default SearchBar;
