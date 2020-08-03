import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { handleInitialUsers, handleInitialPolls } from '../actions/shared'
import Dashboard from './Dashboard'
import PollDetails from './PollDetails'
import LoadingBar from 'react-redux-loading'
import AddPoll from './AddPoll'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import PageNotFound from './PageNotFound'

class App extends Component {

  //Add the handleInitialPolls as well in componentWillMount() to set the data before anyone signed-in
  componentWillMount() {
    const AUTHED_ID = null;
    this.props.dispatch((handleInitialUsers(AUTHED_ID)))
    this.props.dispatch((handleInitialPolls())) 
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#ffb367'}}/>
          <Nav />
          <Switch>
            { 
              this.props.authedUser === null
              ? <Route path='/' component={Login} />
              : 
              //error handling path="/error" -  - Set the right route for undefined /:question_id 
              //debugger
                <Fragment>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:question_id' component={PollDetails} />
                  <Route path='/add' component={AddPoll} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/error' component={PageNotFound} />
                </Fragment>
            }

          </Switch>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
