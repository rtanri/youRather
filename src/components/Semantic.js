import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {
    Segment, 
    Button,
    Header,
    Icon,
    Container,
} from 'semantic-ui-react'

class Semantic extends Component{
    render(){
        const sizes = ['tiny', 'big']
        return (
        <div>
            <Segment raised>
                <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: Segment Group & Button</Header>
            </Segment>
                
            <Container>
                <Segment placeholder>
                    <Header icon>
                        <Icon name='pdf file outline' />
                        No documents are listed for this customer.
                        <div class="button-list">
                            <Button color="brown">Add Document</Button>
                            <Button primary>Compress Document</Button>
                            <Button secondary>Delete File</Button>
                        </div>
                    </Header>    
                </Segment>
            </Container>

            <Segment>
                <div class="button-list">
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
            
            <Segment raised>
                <Header as="h2" textAlign='center' margin-bottom='100px'>Semantic UI: List and Modal</Header>
            </Segment>
    </div>
        )
    }
}

export default Semantic;

