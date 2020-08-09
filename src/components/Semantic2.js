import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {
    Segment, 
    Grid,
    Header,
    Image,

} from 'semantic-ui-react'

class Semantic2 extends Component{
    render(){

        const columns1 = _.times(20, (i) => (
            <Grid.Column key={i}>
              <Image src='/images/wireframe/image.png' />
            </Grid.Column>
          ))
          
        return (
    <div class="contentMargin gridChild">
            <Segment raised inverted color="gray">
                <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: Grid</Header>
            </Segment>
            
            <Segment>
            <Header textAlign='center' >Basic Grid</Header>
            <Grid>{columns1}</Grid>
            </Segment>

            {/* Grid with divider each rows */}
            <Segment>
            <Header textAlign='center'>Grid have divider between columns - Setting in Grid </Header>
                 <Grid columns={3} divided > {/* Set the number of columns as skeleton; columns='two' also can */}
                    <Grid.Row>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>


            {/* Grid with diff Columns amound each rows */}
            <Segment>
            <Header textAlign='center'>Grid have divider between columns - Setting in Grid.Row </Header>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                    <Grid.Column>
                        <Image src='images/wireframe/paragraph.png' />
                    </Grid.Column>
                    <Grid.Column>
                         <Image src='images/wireframe/paragraph.png' />
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Image src='images/wireframe/paragraph.png' />
                        </Grid.Column>
                    <Grid.Column>
                            <Image src='images/wireframe/paragraph.png' />
                    </Grid.Column>
                        <Grid.Column>
                                <Image src='images/wireframe/paragraph.png' />      
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            
        {/* Grid Celled */}
        <Segment>
            <Header textAlign='center'>Grid Celled Normal or Internally</Header>
            <Grid celled='internally'>
                <Grid.Row>
                <Grid.Column width={2}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </div>

    )}
}

export default Semantic2;

