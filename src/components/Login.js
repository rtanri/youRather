import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {
    Segment, Image, Form
} from 'semantic-ui-react'

class Login extends Component{
    render(){
        return (
            <Segment>
                <a href="www.google.com">Test Login Page</a>
            </Segment>
        )
    }
}

export default Login;

