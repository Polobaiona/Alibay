import React, {Component} from 'react'
import {connect} from 'react-redux'
let itemDetails =[]

fetch("http://localhost:4000/items", { method: "GET" })
  .then(x => {
    return x.text();
  })
  .then(responseBody => {
    console.log("rendering item details");
    let body = JSON.parse(responseBody);

    let items = body.itemDetails;
    console.log(itemDetails);

    items.map(item => {
        itemDetails.push(item);
    });
  });

  class UnconnectedItemDetails extends Component {
      constructor(){
          super()
      }
    render = () => {
        let displayItem = itemDetails.filter(item => {
            return(item.name.includes()) 
        })
        return(<div>
            <img className="img" src={displayItem.url}></img>
            <div>{displayItem.name}</div>
            <div>{displayItem.price}</div>
            <div>{displayItem.description}</div>
        </div>)
    }

  }
  let ItemDetails = connect()(UnconnectedItemDetails)
  export default ItemDetails
