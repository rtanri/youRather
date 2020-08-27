import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {
    Menu,
    Image,
} from 'semantic-ui-react'

import {setAuthedUser} from '../actions/authedUser'


class Nav extends Component{

    
    handleLogout = e => {
        e.preventDefault();
        this.props.setAuthedUser(null);
    };
    
    render(){
        
        const {authedUser, users} = this.props;
        // const {activeItem} = this.state
        
        return(
            <Menu fluid>
                <Menu.Item 
                    name ='Home'
                    as={NavLink} to='/' exact
                />
                <Menu.Item 
                    name ='Leaderboard'
                    as={NavLink} to='/leaderboard'
                />

                <Menu.Item 
                    name='Add Question'
                    as={NavLink} to='/add'
                />

                <Menu.Item 
                    name='Logout'
                    onClick={this.handleLogout}
                    position="right"
                />

                
                <Menu.Item>
                    <span>
                        <Image 
                            src={users[authedUser].avatarURL} 
                            avatar
                            spaced='right'
                            verticalAlign='center'
                        />
                        {users[authedUser].name}
                    </span>

                </Menu.Item>



            </Menu>
        )
    }
} 

function mapStateToProps ({users, authedUser}){
    return {
        authedUser,
        users
    };
}

export default connect (mapStateToProps,{setAuthedUser})(Nav)