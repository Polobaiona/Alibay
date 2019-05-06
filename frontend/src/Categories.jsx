import React, { Component } from "react";

class Categories extends Component {
  function1 = () => {
    console.log("electronics");
    this.props.dispatch({ type: "electronics" });
  };

  function2 = () => {
    console.log("cars");
    this.props.dispatch({ type: "cars" });
  };

  function3 = () => {
    console.log("decor");
    this.props.dispatch({ type: "decor" });
  };

  function4 = () => {
    console.log("gardening");
    this.props.dispatch({ type: "gardening" });
  };

  function5 = () => {
    console.log("sports");
    this.props.dispatch({ type: "sports" });
  };
  render = () => {
    return (
      <div>
        <div>
          {" "}
          <div onClick={this.function1}> Electronics</div>
        </div>
        <div>
          <div onClick={this.function2}> Cars</div>
        </div>
        <div>
          <div onClick={this.function3}> Decor</div>
        </div>
        <div>
          <div onClick={this.function4}> Gardening</div>
        </div>
        <div>
          {" "}
          <div onClick={this.function5}> Sports</div>
        </div>
      </div>
    );
  };
}

export default Categories;
