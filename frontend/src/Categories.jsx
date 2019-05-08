<<<<<<< HEAD
class UnconnectedCategories extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }




    render () => {
        return(<div>
            <ul>
                <li><a href="/show-electronics"></a></li>
                <li><a href="/show-category"></a></li>
                <li><a href="/show-electronics"></a></li>
                <li><a href="/show-electronics"></a></li>
                <li><a href="/show-electronics"></a></li>
                <li><a href="/show-electronics"></a></li>
            </ul>
        </div>)
    }
}
let Categories = connect()(UnconnectedCategories);
=======
import React, { Component } from "react";
import { connect } from "react-redux";

class unconnectedCategories extends Component {
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
let Categories = connect()(unconnectedCategories);
>>>>>>> 45b849c60d640f95fb8d99a4e1c7c1954a8644f6
export default Categories;
