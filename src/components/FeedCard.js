import React, {Component} from 'react'
import {
    Header,
    Card,
    Grid,
    Image,
    Segment,
    SegmentGroup,
    Form,
    Button,
    Comment,
    Popup,
    Progress,
} from 'semantic-ui-react'

class FeedCard extends Component{
    render(){
        return(
            <div className='contentMargin '>
            <SegmentGroup className='loginMenu'>
                <CardHeader /><br/>
                <FirstModel />
                <FirstAnswered />
                <br/>
                <SecondModel /><br />
                <ThirdModel/>

            </SegmentGroup>
            </div>
        )
    }
}

const FirstModel = () => (
    <Card centered>

        <Card.Content>
            <Image
            floated='left'
            size='tiny'
            src='https://react.semantic-ui.com/images/avatar/small/matthew.png'
            />
            <Card.Header>Jane Sanders</Card.Header>
            <Card.Meta>Today at 9:05AM</Card.Meta>
            <Card.Description>
                After your 14-days quarantine, you craved for bubble-tea, would you rather?
            </Card.Description>
        </Card.Content>

        <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Tiger Brown Sugar
                    </Button>
                    <Button basic color='orange'>
                        KOI Machiato
                    </Button>
                </div>
        </Card.Content>
        
    </Card>
)

const FirstAnswered = () => (
    <Card centered>

        <Card.Content>
            <Image
            floated='left'
            size='tiny'
            src='https://react.semantic-ui.com/images/avatar/small/matthew.png'
            />
            <Card.Header>Jane Sanders</Card.Header>
            <Card.Meta>Today at 9:05AM</Card.Meta>
            <Card.Description>
                After your 14-days quarantine, you craved for bubble-tea, would you rather?
            </Card.Description>
            <br/>
            <Progress 
                percent={70} progress
                color='brown'
                label='People chose similar option like you'
                active
            />
        </Card.Content>

        <Card.Content extra>
                <div className='ui two buttons'>     
                <Popup    
                    content='Click to change your option'
                    trigger={      
                        <Button 
                            color='green'
                            label='You have chosen'
                            labelPosition='left'
                            content ='Tiger Brown Sugar'
                        />}
                />  
                </div>

        </Card.Content>

    </Card>

)


const SecondModel = () => (
    <Card centered>
        <Card.Content>
            <Image
            floated='left'
            size='tiny'
            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Posted 15h ago</Card.Meta>
            <Card.Description>
                Would you rather?
            </Card.Description>
            <br />
            <div className='ui two buttons'>
                    <Button basic color='green'>
                        Sesame Ice Cream
                    </Button>
                    <Button basic color='orange'>
                        Sago Melon
                    </Button>
            </div>
        </Card.Content>

        <Card.Content extra>
            <Comment.Group>
                <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                    <Comment.Content>
                        <Comment.Author as='a' >Molly</Comment.Author>
                        <Comment.Metadata><div>Today at 9:05AM</div></Comment.Metadata>
                        <Comment.Text>omg it's a huge dilemma for me</Comment.Text>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
            <br />
            <Form reply>
                <Form.TextArea 
                    label='Enter your comment:'
                />
                <Button
                    content='Add Reply'
                    labelPosition='right'
                    icon='edit'
                    secondary
                />
            </Form>
        </Card.Content>
    </Card>
)


const ThirdModel = () => (
    <Card centered >
    <Image
        src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
        wrapped ui = {false}
    />
    <Card.Content>  
        <Card.Header>Daniel Vergusson</Card.Header>
        <Card.Meta>Post 3 days ago</Card.Meta>
        <Card.Description>
            Finish your 9-5 job, would you rather?
        </Card.Description>
    </Card.Content>

    <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color='green'>
                    Drink beer with friends
                </Button>
                <Button basic color='orange'>
                    Netflix at home
                </Button>
            </div>
    </Card.Content>
    
</Card>
)
 

const CardHeader = () => (
    <Header as='h2' textAlign='center' padded>
        <Header.Content>Type of cards to be chosen</Header.Content>
        <Header.Subheader>tell Revin which cards looks best</Header.Subheader>
    </Header>
)

export default FeedCard

