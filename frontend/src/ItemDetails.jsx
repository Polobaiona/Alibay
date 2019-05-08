import React, {Component} from 'react'
import {connect} from 'react-redux'
let allItems =[]

fetch("http://localhost:4000/items", { method: "GET" })
  .then(x => {
    return x.text();
  })
  .then(responseBody => {
    console.log("rendering item details");
    let body = JSON.parse(responseBody);

    let items = body.allItems;
    console.log(allItems);

    items.map(item => {
        allItems.push(item);
    });
  });

  class UnconnectedAllItems extends Component {
      constructor(){
          super()
      }
    render = () => {
        let displayItem = allItems.filter(item => {
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
  let AllItems = connect()(UnconnectedAllItems)
  export default AllItems
