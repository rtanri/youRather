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
import AddQuestion from './AddQuestion'
import FeedCard from './FeedCard'



export class Layout extends Component{
    render(){
        const panes = [
            { menuItem: 'Question Card', render: () => <Tab.Pane><FeedCard /></Tab.Pane> },
            { menuItem: 'AddQuestion', render: () => <Tab.Pane><AddQuestion/></Tab.Pane> },
            { menuItem: 'Leaderboard', render: () => <Tab.Pane><Leaderboard/></Tab.Pane> },
            { menuItem: 'Dashboard', render: () => <Tab.Pane><Dashboard/></Tab.Pane> },
            { menuItem: 'Login', render: () => <Tab.Pane><Login/></Tab.Pane> },
            { menuItem: 'Semantic UI', render: () => <Tab.Pane>{<Semantic1/>}</Tab.Pane> },
          ]
        return(
            <Tab panes={panes} />
        )
    }
}


export default Layout;