import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    state = {
        selectedUser: ''
    }

    handleLogin = (e) => {
        e.preventDefault()
        const { selectedUser } = this.state
        const { setAuthedUser } = this.props

        if (selectedUser) {
            setAuthedUser(selectedUser)
        } else alert('Select a user!')

    }

    onSelectUser = (selectedUser) => this.setState({ selectedUser })

    render () {
        const { users } = this.props
        const { selectedUser } = this.state

        return (
            <Fragment>
                <div className='signin-form'>
                    <div className='form-header'>
                        <p className='starter-title'>Would You Rather: Login Page</p>
                    </div>
                    <div className='form-body'>
                        <form onSubmit={this.handleLogin}>
                            <h1>Select a user: </h1>
                            <div className='signin-body-form'>
                                <img 
                                    src={selectedUser === '' 
                                    ? '/images/welcome.png'
                                    : users[selectedUser].avatarURL}
                                    alt={users[selectedUser]}
                                    className='profile-pic'/> 
                                <select 
                                    className='login-user-select' 
                                    onChange={(e) => this.onSelectUser(e.target.value)}>
                                    <option value=""> Press to Select</option>
                                    {
                                        Object.keys(users).map(user => 
                                            <option className='test' key={user} value={user}>
                                                {user}
                                            </option>)
                                    }
                                </select>                        
                            </div>

                            <button className='signin-button'>SIGN IN</button>
                        </form>
                    </div>
                </div>
            </Fragment>

        )
    }
}

function mapStateToProps ({ users }) {
    return {
        users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)