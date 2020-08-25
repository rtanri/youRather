import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialUsers, handleInitialPolls } from '../actions/shared'
import Nav from './Nav'
import Login from './Login'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'
// import PollDetails from './PollDetails'
import PageNotFound from './PageNotFound'
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
              <Nav />
                <Route path='/' exact component={Dashboard} />
                {/* <Route path='/questions/:question_id' component={PollDetails} /> */}
                <Route path='/add' component={AddQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/error' component={PageNotFound} />
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
