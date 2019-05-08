import React, {Component} from 'react'
import {connect} from 'react-redux'
let allItems =[]

  class UnconnectedItemDetails extends Component {
      constructor(){
          super()
      }
    render = () => {
        let displayItem = this.props.allItems.filter(item => {
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
  let mapStateToProps = state => {
    return{
      allItems: state.allItems
    }
  }
  let ItemDetails = connect(mapStateToProps)(UnconnectedItemDetails)
  export default ItemDetails
