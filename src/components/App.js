import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialUsers, handleInitialPolls } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
// import Layout from './Layout'


class App extends Component {

  //Add the handleInitialPolls as well in componentWillMount() to set the data before anyone signed-in
  componentWillMount() {
    // const AUTHED_ID = null;
    // const AUTHED_ID = 'Sarah Edo'
    this.props.dispatch((handleInitialUsers(AUTHED_ID)))
    this.props.dispatch((handleInitialPolls())) 
  }

  render() {
    return (
      <Dashboard />
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
