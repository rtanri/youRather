import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'

class AccountSetting extends Component {
    render(){
        const {authedUser} = this.props
        return (
            <Fragment>
                <ul className='nav nav-account'>
                    <li>
                        Logout
                    </li>
                    <li>
                        {authedUser}
                    </li>
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(AccountSetting)