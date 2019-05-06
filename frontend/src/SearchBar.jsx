import {connect} from 'react-redux'
import React, {Component} from 'react'
class UnconnectedSearchBar extends Component {
    constructor(props) {
        super(props)
    }
    queryHandler = evt => {
        this.props.dispatch({
            type: 'qSearch',
            q: evt.target.value
        })
    }
    render = () => {
        return( 
        <div>
            <div>
                Search 
                <input type='text' onChange={this.queryHandler} value={this.props.query}></input>
            </div>
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