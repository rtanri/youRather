import React, {Component} from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import {handleInitialPolls} from '../actions/shared'
import {
    Segment,
    Header,
    Tab,
    Grid,
    Image,
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
                <Segment.Group className="dashboardMenu" > 
                    <Header as='h2' textAlign='center' >Dashboard Page</Header>
                    <br />
                     <Tab panes={panes({answeredPolls, unansweredPolls})} />
                </Segment.Group>
            </div>
        )

        // const panes = [
        //     { menuItem: 'Unanswered', render: () => <Tab.Pane attached={false} >{<Grid columns={2}>{unAnsweredCard }</Grid>}</Tab.Pane> },
        //     { menuItem: 'Answered', render: () => <Tab.Pane attached={false}>{<Grid columns={2}>{answeredCard }</Grid>}</Tab.Pane> },
        // ]

        // const unAnsweredCard = (
        //     _.times(7, (i) => (
        //         <Grid.Column key={i}>
        //             <Image src='/images/wireframe/image.png' />
        //         </Grid.Column>
        //     ))
        // )


        // const answeredCard = (
        //     _.times(5, (i) => (
        //         <Grid.Column key={i}>
        //             <Image src='/images/wireframe/paragraph.png' />
        //         </Grid.Column>
        //     ))
        // )



    }
}

const panes = props => {
    // const {userQuestionData} = props;
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


// function mapStateToProps({authedUser, users, polls}){
//     // debugger
//     const answeredIds = Object.keys(users[authedUser].answers);

//     const answered = Object.values(polls)
//         .filter(poll => !answeredIds.includes(poll.id))
//         .sort((a,b) => b.timestamp - a.timestamp);

//     const unanswered = Object.values(polls)
//         .filter(poll => answeredIds.includes(poll.id))
//         .sort((a,b) => b.timestamp - a.timestamp);

//     return {
//         userQuestionData: {
//             answered,
//             unanswered
//         }
//     }
// }


export default connect(mapStateToProps)(Dashboard)