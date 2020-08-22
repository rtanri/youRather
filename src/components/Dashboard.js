import React, {Component} from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import {
    Segment,
    Header,
    Tab,
    Grid,
    Image,
    
} from 'semantic-ui-react'



class Dashboard extends Component {
    
    render(){

        const panes = [
            { menuItem: 'Unanswered', render: () => <Tab.Pane attached={false} >{<Grid columns={2}>{unAnsweredCard }</Grid>}</Tab.Pane> },
            { menuItem: 'Answered', render: () => <Tab.Pane attached={false}>{<Grid columns={2}>{answeredCard }</Grid>}</Tab.Pane> },
        ]

        const unAnsweredCard = (
            _.times(7, (i) => (
                <Grid.Column key={i}>
                    <Image src='/images/wireframe/image.png' />
                </Grid.Column>
            ))
        )


        const answeredCard = (
            _.times(5, (i) => (
                <Grid.Column key={i}>
                    <Image src='/images/wireframe/paragraph.png' />
                </Grid.Column>
            ))
        )


        return(

            <div class='contentMargin'>
                {/* <MenuBar /> */}
                <Segment.Group className="loginMenu" > 
                    <Header as='h2' textAlign='center' >Dashboard Page</Header>
                    <br />
                    <Tab menu={{color:'green', secondary: true}}  panes={panes} />
                </Segment.Group>
            </div>
        )
    }
}


function mapStateToProps({authedUser, users, polls}){
    // debugger
    const answeredIds = Object.keys(users[authedUser].answers);

    const answered = Object.values(polls)
        .filter(poll => !answeredIds.includes(poll.id))
        .sort((a,b) => b.timestamp - a.timestamp);

    const unanswered = Object.values(polls)
        .filter(poll => answeredIds.includes(poll.id))
        .sort((a,b) => b.timestamp - a.timestamp);

    return {
        userQuestionData: {
            answered,
            unanswered
        }
    }
}


export default connect(mapStateToProps)(Dashboard)