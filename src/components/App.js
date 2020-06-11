import React, {Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {handleInitialUsers} from '../actions/shared'
// import Login from './Login'
// import Dashboard from './Dashboard'
import QuestionDetail from './QuestionDetail'
import FaCheck from 'react-icons/lib/fa/check'




class App extends Component {
  componentDidMount() {
    this.props.dispatch((handleInitialUsers()))
  }

  render() {
    return (
    <Fragment> 
        <QuestionDetail.js />
        {/* {this.props.authedUser === null ? <Login /> : <Dashboard/>}      */}
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
