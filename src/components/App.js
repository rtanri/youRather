import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialUsers, handleInitialPolls } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
// import Layout from './Layout'


class App extends Component {

  //Add the handleInitialPolls as well in componentWillMount() to set the data before anyone signed-in
  componentWillMount() {
    const AUTHED_ID = null;
    this.props.dispatch((handleInitialUsers(AUTHED_ID)))
    this.props.dispatch((handleInitialPolls())) 
  }

  render() {
    const {authedUser} = this.props;
    
    return (
      <Router>
      <Fragment>

        <Switch>
          { 
            authedUser === null ? (
            <Route path='/' component={Login} />
            ) : (
              <Fragment>
                <Route path='/' exact component={Dashboard} />
              </Fragment>
            )
          }
        </Switch>
      </Fragment>
    </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
