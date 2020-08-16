import React, {Component} from 'react'
import _ from 'lodash'
import {
    Segment,
    Header,
    Tab,
    Grid,
    Image,
} from 'semantic-ui-react'
// import {connect} from 'react-redux'


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
                <Segment.Group className="loginMenu" > 
                    <Header as='h2' textAlign='center' >Dashboard Page</Header>
                    <br />
                    <Tab menu={{color:'green', secondary: true}}  panes={panes} />
                </Segment.Group>
            </div>
        )
    }
}


export default Dashboard