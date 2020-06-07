import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
// import Dashboard from './Dashboard'
import Login from './Login'
// import LoadingBar from 'react-redux-loading'
// import Question from './Question'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        {this.props.loading === true ? null : <Login />}
      </div>
    )
  }
}

function mapStateToProps ({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
