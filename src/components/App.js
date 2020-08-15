import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Semantic1 from '../components/Semantic1'
// import Semantic2 from '../components/Semantic2'
import { connect } from 'react-redux'
import { handleInitialUsers, handleInitialPolls } from '../actions/shared'


class App extends Component {

  //Add the handleInitialPolls as well in componentWillMount() to set the data before anyone signed-in
  componentWillMount() {
    const AUTHED_ID = null;
    this.props.dispatch((handleInitialUsers(AUTHED_ID)))
    this.props.dispatch((handleInitialPolls())) 
  }

  render() {
    return (
      <Semantic1 />
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
