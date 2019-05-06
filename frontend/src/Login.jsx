import React, { Component } from "react"; // 1
import { connect } from "react-redux";


class UnconnectedLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange()
    handlePasswordChange()
    handleSubmit()

    render = () => {}

}

let Login = connect()(UnconnectedLogin)
export default Login