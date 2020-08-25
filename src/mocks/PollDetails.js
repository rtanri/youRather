import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { handleSavePollAnswer } from '../actions/shared'
import {Redirect} from 'react-router-dom'

class PollDetails extends Component {

    //     // w. error handling if poll is empty, set a possibility for empty object/undefined/null
    //    if ( this.props.poll === {} ){
    //         // redirect to error page
    //          or, window.location.href = /error
    //    } 
    // }


    state = {
        selectedOption: ''
    }

    selectRadio = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    submitAnswer = (e) => {
        e.preventDefault()

        const { savePollAnswer } = this.props
        const answer = this.state.selectedOption
        savePollAnswer(answer)
    }

    render () {
        //with error handling before render block start a possibility of empty poll
        if (!this.props.poll){
            //with redirect to error page
            return <Redirect to='/error' />
        }

        const { poll, users, authedUser } = this.props
    //Add in the constant here
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
            <Fragment>
                <div className='margin poll-details-form'>
                    <div className='form-header'>
                        <p className='form-title'>Would You Rather</p>
                    </div>
                    {
                        answered
                        ? ( //if question is answered
                            <div className='form-body'>
                            <ul className='no-padding no-margin'>
                                
                                <li className='fix-answered-li full-width'>
                                    <span className={isOneAnswered ? 'answered' : ''}>{optionOne}</span>
                                    {isOneAnswered ? <span className='padding-left answered'> - - is your Answer!</span> : null}
                                    <span className='vote-result'>{`${optionOneVotes} vote(s) | ${optionOnePercentage}%`}</span>
                                </li>

                                <li className='no-padding fix-answered-li full-width'>
                                    <div className='or-seperator'>
                                        <p className='inline-p'>OR</p>
                                    </div>
                                </li>
                                
                                <li className='padding-bottom fix-answered-li full-width'>
                                    <span className={isTwoAnswered ? 'answered' : ''}>{optionTwo}</span>
                                    {isTwoAnswered ? <span className='padding-left answered'> - - is your Answer!</span> : null} 
                                    <span className='vote-result'>{`${optionTwoVotes} vote(s) | ${optionTwoPercentage}%`}</span>
                                </li>
                            </ul>
                            </div>
                        )
                        : ( //question is not answered yet
                            <form className='form-body' onSubmit={this.submitAnswer} >
                                <div className='radio_container-div'>
                                    <label className='radio_container'>
                                        <span className='input_radio'>{optionOne}</span>
                                        <input  
                                            className='hide'
                                            type="radio" 
                                            name='select_option' 
                                            value="optionOne"
                                            onClick={this.selectRadio}/>
                                        <span className='checkmark'></span>
                                    </label>
                                    <p className='or-seperator'>OR</p>
                                    <label className='radio_container margin-bottom'>
                                        <span className='input_radio'>{optionTwo}</span>
                                        <input 
                                            className='hide' 
                                            type="radio" 
                                            name='select_option' 
                                            value="optionTwo"
                                            onClick={this.selectRadio}/>
                                        <span className='checkmark'></span>
                                    </label>
                                </div>
                                <button className='button'>Submit</button>
                            </form>
                        ) 
                    }
                    <hr/>

                    {/* Card Content Extra */}
                    <div className='user-details'>
                            <ul className='user-detail-ul nav nav-account block'>
                                <li className='user-info-li inline-block'>
                                    <img 
                                        src={authorAvatar}
                                        alt={`Avatar of ${author}`}
                                        className='medium profile-pic vertical-align'/>
                                    <span className="padding-left">{author}</span>
                                    <span className="padding-left time-stamp user-info-li">{timestamp}</span>
                                </li>
                            </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps ({authedUser, polls, users}, props) {
    const { question_id } = props.match.params
    const poll = polls[question_id]
    //debugger
    //TRANSFER: all the const with poll within to render() since we need to handle error of: poll={}

    // const authorAvatar = users[poll.author].avatarURL
    // const author = users[poll.author].id
    // const timestamp = formatDate (poll.timestamp)
    // const optionOne = poll.optionOne.text
    // const optionTwo = poll.optionTwo.text
    // const isOneAnswered = poll.optionOne.votes.includes(authedUser)
    // const isTwoAnswered = poll.optionTwo.votes.includes(authedUser)
    // const answered = isOneAnswered || isTwoAnswered

    return {
        poll,
        users,
        authedUser,
        // authorAvatar,
        // author,
        // timestamp,
        // optionOne,
        // optionTwo,
        // answered,
        // isOneAnswered,
        // isTwoAnswered,
        // polls,
        // question_id,
    }
}

function mapDispatchToProps (dispatch, props) {
    const { question_id } = props.match.params
    return {
        savePollAnswer : (answer) => {
            dispatch(handleSavePollAnswer(question_id, answer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollDetails)