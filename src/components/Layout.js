import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Tab,
} from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

import Semantic1 from './Semantic1'
import Login from './Login'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'



export class Layout extends Component{
    render(){
        const panes = [
            { menuItem: 'Leaderboard', render: () => <Tab.Pane><Leaderboard/></Tab.Pane> },
            { menuItem: 'Dashboard', render: () => <Tab.Pane><Dashboard/></Tab.Pane> },
            { menuItem: 'Login', render: () => <Tab.Pane><Login/></Tab.Pane> },
            { menuItem: 'AddQuestions', render: () => <Tab.Pane>Page for User to add question with 2 options</Tab.Pane> },
            { menuItem: 'Semantic UI', render: () => <Tab.Pane>{<Semantic1/>}</Tab.Pane> },
          ]
        return(
            <Tab panes={panes} />
        )
    }
}


export default Layout;