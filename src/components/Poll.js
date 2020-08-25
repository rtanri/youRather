import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card,
    Image,
    Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {formatDate} from '../utils/helpers'

class Poll extends Component {
    render () {
        const { poll, users } = this.props

        if (poll === null ) {
            return <p>That question doesn't exist</p>
        }
        // debugger
        const { optionOne, optionTwo } = poll
        const { id } = this.props
        const author = poll.author
        const authorAvatar = users[poll.author].avatarURL
        const timestamp = formatDate (poll.timestamp)

        return (
            <Link to={`/questions/${id}`}>
            <div class="cardUI">
                <Card centered>
                    <Card.Content>
                        
                        <Image
                        floated='left'
                        size='tiny'
                        src={authorAvatar}
                        />
                        <Card.Header>{author}</Card.Header>
                        <Card.Meta>Posted on {timestamp}</Card.Meta>
                       

                        <Card.Description as='h2' textAlign='center'> 
                            Would you rather?
                        </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    {optionOne.text}
                                </Button>
                                <Button basic color='orange'>
                                    {optionTwo.text}
                                </Button>
                            </div>
                    </Card.Content>
            </Card>
            </div>
        </Link>
        )
    }
}


// settle the author, authorAvatar, timestamp
function mapStateToProps ({authedUser, polls, users}, { id }) {
    const poll = polls[id]
    // debugger
    return {
        authedUser,
        users,
        poll,
        id,
    }
}

export default connect(mapStateToProps)(Poll)