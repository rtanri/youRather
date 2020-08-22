import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card,
    Image,
    Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Poll extends Component {
    render () {
        const { poll } = this.props

        if (poll === null ) {
            return <p>This question doesn't exist</p>
        }

        const { optionOne, optionTwo } = poll
        const { id } = this.props

        return (
            <Link to={`/questions/${id}`} className='form margin poll-form'>
            <div>
                <Card centered>
                    <Card.Content>
                        <Image
                        floated='left'
                        size='tiny'
                        src={authorAvatar}
                        />
                        <Card.Header>{author}</Card.Header>
                        <Card.Meta>{timestamp}</Card.Meta>
                        <Card.Description>
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
function mapStateToProps ({authedUser, polls, users}, { id, props }) {
    const poll = polls[id]

    return {
        authedUser,
        poll,
        id,
    }
}

export default connect(mapStateToProps)(Poll)