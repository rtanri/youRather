import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {
    Segment, 
    Button,
    Header,
    Icon,
    Container,
    List,
    Image,
    Modal,
} from 'semantic-ui-react'

class Semantic extends Component{
    render(){
        const sizes = ['tiny', 'big']
        return (
        <div class="contentMargin">
            <Segment raised inverted color="gray">
                <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: Segment, Segment Group & Button</Header>
            </Segment>
                
            {/* Segment inside Container */}
            <Container>
                <Segment placeholder>
                    <Header icon>
                        <Icon name='pdf file outline' />
                        No documents are listed for this customer.
                        <div class="flex-even">
                            <Button color="brown">Add Document</Button>
                            <Button primary>Compress Document</Button>
                            <Button secondary>Delete File</Button>
                        </div>
                    </Header>    
                </Segment>
            </Container>

            {/* Button with Icons and Numbers */}
            <Segment>
                <div class="flex-even">
                    <Button 
                        content = 'Like'
                        icon = 'heart'
                        label = {{ as: 'a', basic: true, content: '2,548'}}
                        labelPosition = 'right'
                    />
                    <Button 
                        content = 'Bought'
                        icon='shop'
                        label = {{ as: 'a', basic: true, content: '209'}}
                        labelPosition = 'right'
                    />
  
                    <Button 
                        icon = 'fork'
                        label = {{as : 'a', basic: true, content: 30}}
                        labelPosition = 'left'
                    />
                    <Button.Group>
                        <Button positive>Agree</Button>
                        <Button.Or />
                        <Button secondary>Disagree</Button>
                    </Button.Group>
                </div>
            </Segment>

            {/* Various Size of Segment: mini, tiny, big, large, massive, etc */}
            <div>
                {sizes.map((size) => (
                    <Segment.Group key={size} size={size}>
                        <Segment inverted secondary color='green'>It's a {size} segment</Segment>
                        <Segment tertiary textAlign="right">And it's a {size} segment, too</Segment>
                        <Segment color='teal' textAlign="center">Then, this is still {size} segment</Segment>
                    </Segment.Group>
                ))}
            </div>
            <br/>
            
            <Segment raised inverted color='gray'>
                <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: List</Header>
            </Segment>

            <Header textAlign='center'>Examples of Lists with Icons, Images, others</Header>
            <div class='flex-even'>
                <Segment floated = 'left' > 
                    <strong>List with Shorthands</strong>
                    <List
                        items = {[
                            'Apples',
                            'Pears',
                            'Orange',
                            'Grapes',
                            'Pinapple'
                        ]}
                        // to seperate with line and bigger space
                        divided relaxed
                    />
                </Segment>


                
                <Segment floated = 'left'>
                    <strong>Normal List with Icon</strong>
                    <List>
                        <List.Item>
                            <List.Icon name='volleyball ball' />
                            <List.Content>Watermelon</List.Content> 
                        </List.Item>
                        <List.Item>
                            <List.Icon name='rocket' />
                            <List.Content>Plum</List.Content> 
                        </List.Item>
                        <List.Item>Banana</List.Item>
                        <List.Item>Dragon Fruits</List.Item>
                    </List>
                </Segment>


                <Segment floated = 'left'> 
                    <strong>Shorthands with link and icon</strong>
                    <List divided>
                        <List.Item icon='users' content='Semantic UI' />
                        <List.Item icon='compass' content='Singapore'/>
                        <List.Item 
                            icon ='mail'
                            content= { <a href='mailto:revin@semantic-ui.com'>revin@semantic-ui.com</a> }
                        />
                        <List.Item 
                            icon ='mail'
                            content= { <a href='www.semantic-ui.com'>semantic-ui.com</a> }
                        />
                    </List>
                </Segment>

                <Segment floated='right'>
                        <List divided relaxed >
                            <List.Item>
                                <List.Icon name='github' size='large' verticalAlign='middle'/>
                                <List.Content>
                                    <List.Header>Semantic/youRather </List.Header>
                                    <List.Description>Updated 10mins ago</List.Description>
                                </List.Content>
                            </List.Item>

                            <List.Item>
                                
                                <List.Icon name='google drive' size='large' verticalAlign='middle'/>
                                <List.Content>
                                    <List.Header>G-drive/revintanri</List.Header>
                                    <List.Description>Updated 22mins ago</List.Description>
                                </List.Content>
                            </List.Item>

                            <List.Item>
                                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matthew.png'/>
                                <List.Content>
                                    <List.Header as='a'>Library/PracticeUI</List.Header>
                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                </Segment>

                <Segment floated='right'>
                <List ordered>
                    <List.Item as='a'>Getting Started</List.Item>
                    <List.Item as='a'>Introduction</List.Item>
                    <List.Item>
                        Languages
                        <List.List as='ol'>
                            <List.Item as='li'>
                               <a href='#'>HTML</a>
                            </List.Item>
                            <List.Item as='li'>Javascript</List.Item>
                            <List.Item as='li'>CSS</List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item>
                        Review
                        <List.List as='ul'>
                            <List.Item as='li'>
                                <a href='#'>Good</a>
                            </List.Item>
                            <List.Item as='li'>
                                <a href='#'>Bad</a>
                            </List.Item>
                        </List.List>
                    </List.Item>
                </List>
                </Segment>

            </div>


            <div class='mediumWidth'>
            <Header textAlign='center'>Typical Footer</Header>
                <Segment>
                    <List floated='right' horizontal>
                        <List.Item disabled href='#'>
                            © GitHub, Inc.
                        </List.Item>
                        <List.Item href='#'>Terms</List.Item>
                        <List.Item href='#'>Privacy</List.Item>
                        <List.Item href='#'>Contact</List.Item>
                        </List>

                        <List horizontal>
                        <List.Item href='#'>About Us</List.Item>
                        <List.Item href='#'>Jobs</List.Item>
                    </List> 
                </Segment>

                <Header textAlign='center'>List with Floating Button</Header>
                <Segment>
                <List divided verticalAlign='middle'>
                    <List.Item>
                    <List.Content floated='right'>
                        <Button>Add</Button>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                    <List.Content>Lena</List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Content floated='right'>
                        <Button>Add</Button>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                    <List.Content>Lindsay</List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Content floated='right'>
                        <Button>Add</Button>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
                    <List.Content>Mark</List.Content>
                    </List.Item>
                    <List.Item>
                    <List.Content floated='right'>
                        <Button>Add</Button>
                    </List.Content>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                    <List.Content>Molly</List.Content>
                    </List.Item>
                </List>
                </Segment>
            </div>
            <div class="contentMargin">
                <Segment raised inverted color='gray'>
                    <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: Modal</Header>
                </Segment>

                <Header as ='h3' textAlign='center'>Normal Modal</Header>
                
                {/* Shorthanded Modal */}
                <div>
                    <Modal
                        trigger={<Button>Show Modal</Button>}
                        header='Reminder!'
                        content='Call Benjamin regarding the reports.'
                        actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
                    />
                </div>
            </div>
    </div>


    )}
}

export default Semantic;

