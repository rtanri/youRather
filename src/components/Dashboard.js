import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleInitialPolls} from '../actions/shared'
import {
    Segment,
    Header,
    Tab,
} from 'semantic-ui-react'
import Poll from './Poll'



class Dashboard extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialPolls())
    }

    render(){

        const {answeredPolls, unansweredPolls} = this.props;
        
        return(

            <div class='contentMargin'>
                <Segment.Group className='dashboardMenu' > 
                    <DashboardHeader />
                    <br />
                     <Tab panes={panes({answeredPolls, unansweredPolls})} />
                </Segment.Group>
            </div>
        )

    }
}

const DashboardHeader = () => (
    <Header as='h2' textAlign='center' padded>
        <Header.Content>Always Trust Your Hidden Appetite</Header.Content>
        <Header.Subheader>Choose what you like the most!</Header.Subheader>
    </Header>
)

const panes = props => {

    const {answeredPolls, unansweredPolls} = props

    return [
        {
            menuItem: 'Unanswered',
            render: () => (
                <Tab.Pane>
                    {unansweredPolls.map((id) => (
                            <Poll 
                                key={id} 
                                id={id}
                                
                            /> 
                        ))
                    }
                </Tab.Pane>
            )
        },
        {
            menuItem: 'Answered',
            render: () => (
                <Tab.Pane>
                    {answeredPolls.map((id) => (
                            <Poll 
                                key={id} 
                                id={id}
                            /> 
                        ))
                    }
                </Tab.Pane>
            )
        }
    ]
}

function mapStateToProps ({ polls, authedUser, users, loadingBar }) {
    const user = users[authedUser]

    const answeredPolls = Object.keys(polls).length !== 0
        ? Object.keys(user.answers)
            .sort((a,b) => polls[b].timestamp - polls[a].timestamp)
        : []

    const unansweredPolls = Object.keys(polls).length !== 0
        ? Object.keys(polls)
            .filter(pollID => !answeredPolls.includes(pollID))
            .sort((a,b) => polls[b].timestamp - polls[a].timestamp)
        : []

    return {
        answeredPolls,
        unansweredPolls,
        loadingBar,
    }
}



export default connect(mapStateToProps)(Dashboard)