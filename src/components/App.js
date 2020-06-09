import React, {Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {handleInitialUsers} from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'



class App extends Component {
  componentDidMount() {
    this.props.dispatch((handleInitialUsers()))
  }

  render() {
    return (
    <Fragment> 
        {this.props.authedUser === null ? <Login /> : <Dashboard/>}     
    </Fragment>
    )
  }
}

function mapStateToProps ({authedUser}){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
