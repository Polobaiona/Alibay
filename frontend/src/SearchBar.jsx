import {connect} from 'react-redux'
import React, {Component} from 'react'

class UnconnectedSearchBar extends Component {
    constructor(props) {
        super(props)
    }
    handleSearchChange = evt => {
        console.log(evt.target.value)
        this.props.dispatch({
            type: 'qSearch',
            q: evt.target.value
        })
    }
    render = () => {  
        return (  
                <div>  
                    <form onSubmit={this.handleSubmit}>  
                        Search
                        <input onChange={this.handleSearchChange} type="text" /> 
                        <button onClick={this.handleSearchChange}>Search!</button>
                    </form> 
                  </div>
                  ) 
           } 
}
let SearchBar = connect()(UnconnectedSearchBar)
export default SearchBar;