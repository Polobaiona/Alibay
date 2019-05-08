import {connect} from 'react-redux'
import React, {Component} from 'react'
class UnconnectedSearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {searchWords: ""} 
    }
    handleSearchChange = evt => {
        this.setState({searchWords: event.target.value})
        this.props.dispatch({
            type: 'qSearch',
            q: evt.target.value
        })
    }
    handleSubmit = event => { 
            event.preventDefault() 
            console.log("form submitted") 
            let data = new FormData() 
            data.append("search", this.state.searchWords) 
            fetch("http://localhost:4000/handleSearchChange", { 
                    method: "POST", 
                    body: data, 
                    credentials: "include" 
                }) 
        }
    render = () => {  
        return (  
                <div>  
                    <form onSubmit={this.handleSubmit}>  
                        Search
                        <input onChange={this.handleSearchChange} type="text" /> 
                        <input type="submit" /> 
                    </form> 
                  </div>
                  ) 
           } 
}
let mapStateToProps = store => {
    return({
        query: store.querySearch, 

    })
}
let search = connect(mapStateToProps)(UnconnectedSearchBar)
export default search;