import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedItem extends Component {
  constructor(props) {
    super(props);
    this.state = { category: "" };
  }

  render = () => {
    return <div>Brandon's code goes here</div>;
  };
}

let mapStateToProps = state => {
  return { category: state.category };
};

let Item = connect(mapStateToProps)(UnconnectedItem);

export default Item;
