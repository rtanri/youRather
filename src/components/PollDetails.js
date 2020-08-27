import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Card,
    Image,
    Button,
    Progress,
    Popup,
} from 'semantic-ui-react'
import {formatDate} from '../utils/helpers'
import {handleSavePollAnswer} from '../actions/shared'
import {Redirect} from 'react-router-dom'
import { savePollAnswer } from '../actions/polls'



class PollDetail extends Component {
    
    state = {
        value: ''
    } 

    selectOption = (e) => {
        console.log(e.target.value)
        console.log(this.state.value)
        this.setState({
            value: e.target.value
        })
        console.log(this.state.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // debugger
        if (this.state.value !== '') {
        const {savePollAnswer} = this.props
        const answer = this.state.value
        savePollAnswer(answer)
    }}

    handleBack = () => {
        this.props.history.push('/')
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

                    <Card.Description as='h2' textAlign='center'> 
                            Would you rather?
                        </Card.Description>
                </Card.Content>
                <Card.Content extra>
                {(isOneAnswered) ? 
                    <div>
                            <Progress 
                                percent={optionOnePercentage} progress
                                color='brown'
                                label='People chose same option'
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
                                        content ={optionOne}
                                    />}
                            />  
                            </div>
                        
                            <div class="marginButton" >
                                <Button size="small" floated='right' onClick={this.handleBack}>
                                    Back
                                </Button>
                            </div>
                    </div> 
                : (isTwoAnswered ? 
                    <div>
                    <Progress 
                                percent={optionTwoPercentage} progress
                                color='brown'
                                label='People chose same option'
                                active
                            />
                            <br />
                            <div className='ui two buttons'>   
                              
                            <Popup    
                                content='Click to change your option'
                                trigger={      
                                    <Button 
                                        color='orange'
                                        label='You have chosen'
                                        labelPosition='left'
                                        content ={optionTwo}
                                    />}
                            />  
                            </div>
                            <div class="marginButton" >
                                <Button size="small" floated='right' onClick={this.handleBack}>
                                    Back
                                </Button>
                            </div>
                    </div>
                :
                <div class="cardExtraContent">  
                    <Button.Group className='ui two buttons'>
                        <Button 
                            positive 
                            color='green'
                            value='optionOne'
                            onClick={this.selectOption}
                        >
                            {optionOne}
                        </Button>
                        <Button.Or/>
                        <Button 
                            color='orange'
                            value='optionTwo'
                            onClick={this.selectOption}
                        >
                            {optionTwo}
                        </Button>
                    </Button.Group>
                    
                    <div class="marginButton" >
                        <Button size="small" floated='right'  onClick={this.handleSubmit}>
                            Submit Answer
                        </Button>
                        <Button size="small" floated='right' onClick={this.handleBack}>
                            Back
                        </Button>

                    </div>
                </div>
                )}
            </Card.Content>
            </Card>

        </div>
    )}
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