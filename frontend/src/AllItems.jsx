import React, { Component } from "react" 
import { connect } from "react-redux"

class UnconnectedAllItems extends Component {
  constructor(props) {
    super(props)
    this.state = {	
            name: "",
            description: "",
            id: "",
            price: 0,
            location: "",
        }
    }

 
  render = () => {
    return(
        <div>
            {this.state.items.map( item => {
                data.append("", this.state.)
            }


            )}
        </div>
    )
  }
}

let AllItems = connect()(UnconnectedAllItems)
export default AllItems
