import {connect} from 'react-redux'
import React, {Component} from 'react'
class UnconnectedSearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {searchWords: ""} 
    }
    queryHandler = evt => {
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
            fetch("http://localhost:4000/querysearch", { 
                    method: "POST", 
                    body: data, 
                    credentials: "include" 
                }) 
        }
    render = () => {  
        return (  
                <div>  
                    <form onSubmit={this.handleSubmit}>  
                        <input onChange={this.queryHandler} type="text" /> 
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