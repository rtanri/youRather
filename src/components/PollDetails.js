import React, {Component, Fragment} from 'react'
import {connect} from 'react-router'
import {
    Card,
    Image,
    Button,
    Progress,
    Popup
} from 'semantic-ui-react'
import {formatDate} from '../utils/helpers'
import {handleSavePollAnswer} from '../actions/shared'
import {Redirect} from 'react-router-dom'

class PollDetail extends Component {
    
    state = {
        selectedOption: ''
    } 

    handleSubmitAnswer = (e) => {
        e.preventDefault()
        const {savePollAnswer} = this.props
        const answer = this.state.selectedOption
        savePollAnswer(answer)
    }

    render(){

        if (!this.props.poll){
            return <Redirect to='error' />
        }

        const { poll, users, authedUser } = this.props

        const authorAvatar = users[poll.author].avatarURL
        const author = users[poll.author].id
        const timestamp = formatDate (poll.timestamp)
        const optionOne = poll.optionOne.text
        const optionTwo = poll.optionTwo.text
        const isOneAnswered = poll.optionOne.votes.includes(authedUser)
        const isTwoAnswered = poll.optionTwo.votes.includes(authedUser)
        const answered = isOneAnswered || isTwoAnswered

        const optionOneVotes = poll.optionOne.votes.length
        const optionTwoVotes = poll.optionTwo.votes.length
        const optionOnePercentage = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2)
        const optionTwoPercentage = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2)


        return (

        <div class="cardUI">
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
            {
                answered ? ( //if question is answered
                    <Card.Content extra>
                            <Progress 
                                percent={70} progress
                                color='brown'
                                label='People chose similar option like you'
                                active
                            />

                            <br />

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
                ) : ( //question is not yet answered

                )
            }
                    
            </Card>
                ) 
            }
        </div>
        )
    }
}

function mapStateToProps ({authedUser, polls, users}, props){
    const {question_id} = props.match.params
    const poll = polls[question_id]

    return{
        poll,
        users,
        authedUser,
    }
}

function mapDispatchToProps (dispatch, props){
    const {question_id} = props.match.params
    return {
        savePollAnswer : (answer) => {
            dispatch(handleSavePollAnswer(question_id, answer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollDetail)