import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {
    Segment, 
    Grid,
    Header,
    Image,
    Comment,
    Form,
    Button,
    Reveal,
    Popup,
    Tab,
    Label,
    Menu,
} from 'semantic-ui-react'

class Semantic2 extends Component{

    render(){

        const columns1 = _.times(20, (i) => (
            <Grid.Column key={i}>
              <Image src='/images/wireframe/image.png' />
            </Grid.Column>
          ))

          const panes = [
            { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
          ]

          const panesWithIcon = [
            {
              menuItem: {key: 'users', icon: 'users', content: 'Users'},
              render: () => <Tab.Pane> Tab 1 - List of Song Artist</Tab.Pane>,
            },
            {
              menuItem: (
                <Menu.Item key='messages'>
                  Messages<Label>20</Label>
                </Menu.Item> 
              ),
              render: () => <Tab.Pane>Tab 2 - List of Chloe Ting Workout Plan and Videos</Tab.Pane>
            },
          ]
        

        return (
          
    <div>
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
                <Header textAlign='center'>Grid Celled Normal or Internally with Column Width</Header>
                <Grid celled='internally'>
                    <Grid.Row padded>
                    <Grid.Column width={4}>
                        <Reveal animated='rotate'>
                            <Reveal.Content visible>
                                <Image src='images/wireframe/image.png' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image size = 'small' src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                            </Reveal.Content>
                        </Reveal>
                        
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image src='images/wireframe/centered-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Image src='images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={3}>
                        <Image src='images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Image src='images/wireframe/paragraph.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image src='images/wireframe/image.png' />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            {/* Grid with Stretch */}
            <Segment>
            <Header textAlign='center'>Grid Celled Normal or Internally with Column Width</Header>
            <Grid columns={3} divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Reveal animated='rotate'>
                            <Reveal.Content visible>
                                <Image src='images/wireframe/image.png' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                            </Reveal.Content>
                        </Reveal>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        </Segment>
                        <Segment>
                            <Image src='images/wireframe/paragraph.png' />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                        <Segment>3</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>

            {/* Grid with responsive width */}
            <Segment>
            <Header textAlign='center'>Responsive Width: Doubling and Stackable</Header>
            <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column largeScreen={2} widescreen={1}>
            <Image src='/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid>
            </Segment>

            {/* Comments with Comment Form */}
            <Segment>
                <Header textAlign='center'>Responsive Width: Doubling and Stackable</Header>
                <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
          <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
              <Comment.Content>
                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
          <Comment.Content>
            <Comment.Author as='a'>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>5 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>
            </Segment>

            {/* Reveal Pictures and Pop-up */}
            <Segment>
                    <Header textAlign='center'> Reveal 2nd Picture with Pop-up Feature</Header>
                    <Popup
                    trigger ={
                        <Reveal animated='fade' >
                            <Reveal.Content visible>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                            </Reveal.Content>
                        </Reveal>
                        }
                    content = "This picture will change into different girl picture"
                    mouseLeaveDelay={800}  
                    inverted
                    />

                    <br/>
                    <Popup 
                        trigger={ 
                            <Button 
                                content = 'Add her photos'
                                icon = 'add'
                                label = {{ as: 'a', basic: true, content: '2,548 saved'}}
                                labelPosition = 'right'
                            />
                        }
                        content="When you click this, you will add this girl's photo to your phone"
                        basic
                    />
                    <br />
                    Find this girl?
                    <Popup 
                        trigger={ 
                            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                        }
                        content="Where can you find this missing girl?"
                        basic
                    />
            </Segment>

            {/*Tabs */}
            <Segment>
                <Header textAlign='center'>Tabs with vertical setup</Header>
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
                <br />

                <Header textAlign='center'>Tabs with horizontal setup</Header>
                <Tab panes={panes} />
                <br />

                <Header textAlign='center'>Tabs with Notifs & Icons</Header>
                <Tab panes ={panesWithIcon} />
                <br />

        </Segment>
      
            
    </div>
        )
    }
}

export default Semantic2;

