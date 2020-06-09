import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions.authedUser'

class AccountSetting extends Component {
    handleLogout = () => {
        const {setAuthedUser} = this.props
        setAuthedUser(null)
    }

    render(){
        const {authedUser} = this.props
        return (
            <Fragment>
                <ul className='nav nav-account'>
                    <li onClick={this.handleLogout} className='nav-li'>
                        Logout
                    </li>
                    <li className='nav-li'>
                        {authedUser}
                    </li>
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps({authedUser, users}){
    return {
        authedUser,
        users
    }
}

function mapDispatchToProps(dispatch){
    return{
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetting)