import React, {Component} from 'react'
import {connect} from 'react-redux'
let allItems =[]

fetch("http://localhost:4000/items", { method: "GET" })
  .then(x => {
    return x.text()
  })
  .then(responseBody => {
    console.log("rendering item details")
    let body = JSON.parse(responseBody)

    let items = body.allItems
    console.log(allItems)

    items.map(item => {
        allItems.push(item)
    })
  })

class UnconnectedSearchResults extends Component {
    constructor(props){
        super(props)
    }
    render = () => {
        let nameCheck = items.filter(item => {
            return(item.name.includes(this.props.query)) 
        }
        return(<div>
            {maxPriceCheck.map(item => {
               return(<div>{item.name}</div>)
            })}
        </div>) 
    }
}
let SearchResults = connect()(UnconnectedSearchResults)

export default SearchResults
