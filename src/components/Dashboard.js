import React, {Component} from 'react'
import _ from 'lodash'
import {
    Segment,
    Header,
    Tab,
    Grid,
    Image,
    Menu,
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
                <MenuBar />
                <Segment.Group className="loginMenu" > 
                    <Header as='h2' textAlign='center' >Dashboard Page</Header>
                    <br />
                    <Tab menu={{color:'green', secondary: true}}  panes={panes} />
                </Segment.Group>
            </div>
        )
    }
}

class MenuBar extends Component{
    state = {}

    handleClick = (e, {name}) => this.setState({activeItem: name})
    
    render(){
        const {activeItem} = this.state
        
        return(
            <Menu fluid>
                <Menu.Item 
                    name ='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleClick}
                />
                <Menu.Item 
                    name ='Leaderboard'
                    active={activeItem === 'Leaderboard'}
                    onClick={this.handleClick}
                />

                <Menu.Item 
                    name='Add Question'
                    active= {activeItem === 'Add Question'}
                    onClick={this.handleClick}
                />
                <Menu.Item 
                    name='Name'
                    position = "right"
                />
                
                <Menu.Item>
                    <Image size="mini" src='https://react.semantic-ui.com/logo.png' />
                </Menu.Item>

                <Menu.Item 
                    name='Logout'
                    active= {activeItem === 'Add Question'}
                    onClick={this.handleClick}
                />

            </Menu>
        )
    }
} 

export default Dashboard