import React, { Component } from "react";
import { connect } from "react-redux";

class unconnectedCategories extends Component {
  function1 = () => {
    console.log("state changed to all items");
    this.props.dispatch({ type: "all-items" });
  };

  function2 = () => {
    console.log("state changed to sport");
    this.props.dispatch({ type: "sport" });
  };

  function3 = () => {
    console.log("state changed to electronic");
    this.props.dispatch({ type: "electronic" });
  };

  function4 = () => {
    console.log("state changed to kitchen");
    this.props.dispatch({ type: "kitchen" });
  };

  function5 = () => {
    console.log("state changed to bathroom");
    this.props.dispatch({ type: "bathroom" });
  };

  function6 = () => {
    console.log("state changed to pet");
    this.props.dispatch({ type: "pet" });
  };
  function7 = () => {
    console.log("state changed to car");
    this.props.dispatch({ type: "car" });
  };
  function8 = () => {
    console.log("state changed to other");
    this.props.dispatch({ type: "other" });
  };
  render = () => {
    return (
      <div className="categories-container">
        <div className="categories" onClick={this.function1}>
          {" "}
          <div> All Items</div>
        </div>
        <div className="categories" onClick={this.function2}>
          {" "}
          <div> Sport</div>
        </div>
        <div className="categories" onClick={this.function3}>
          <div> Electronic</div>
        </div>
        <div className="categories" onClick={this.function4}>
          <div> Kitchen</div>
        </div>
        <div className="categories" onClick={this.function5}>
          <div> Bathroom</div>
        </div>
        <div className="categories" onClick={this.function6}>
          {" "}
          <div> Pet</div>
        </div>
        <div className="categories" onClick={this.function7}>
          <div> Car</div>
        </div>
        <div className="categories" onClick={this.function8}>
          <div> Other</div>
        </div>
      </div>
    );
  };
}
let Categories = connect()(unconnectedCategories);

export default Categories;
