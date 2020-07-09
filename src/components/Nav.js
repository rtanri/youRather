import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {NavLink} from 'react-router-dom'

class Nav extends Component {

    handleLogout = () => {
        const {setAuthedUser, /*history*/} = this.props
        setAuthedUser(null)
        // history.push('/')
    }

    render () {
    const {authedUser, /*avatar*/} = this.props
        return (
            <div>
                <nav className="navbar-css">
                    { authedUser === null 
                    ? <span className='login-title'>Would You Rather... 🤔</span> : 
                        <ul className='nav'>
                            <li className="nav-li">
                                <NavLink to='/' exact activeClassName='active'>
                                    Home
                                </NavLink>
                            </li>  
                            <li>
                                <NavLink to='/leaderboard' exact activeClassName='active'>
                                    Leaderboard
                                </NavLink>
                            </li>  
                            <li>
                                <NavLink to='/add' exact activeClassName='active'>
                                    Add Poll
                                </NavLink>
                            </li>  

                            <ul className='nav nav-account'>
                                <li className="nav-li">
                                    {authedUser}
                                </li>  

                                <li className='user-name nav-li'>
                                    {/* <img 
                                                src={avatar}
                                                alt={`Avatar of ${avatar}`}
                                                className='profile-pic mini'/> */}
                                </li>

                                <li onClick={this.handleLogout} className='nav-li'>
                                    <NavLink to='/' >
                                    Logout
                                    </NavLink>
                                </li>
                            </ul> 
                        </ul>
                    }

                    
                    
                </nav>
            </div>
        )
    }
}


function mapStateToProps({ authedUser, users }) {
    // const avatar = users[authedUser].avatarURL
    return {
        authedUser,
        // avatar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)