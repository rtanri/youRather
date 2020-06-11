import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import MenuBar from './MenuBar'
import { formatDate } from '../utils/helpers'
import FaCheck from 'react-icons/lib/fa/check'
import { handleSaveQuestionAnswer } from '../actions/shared'

class QuestionDetails extends Component {
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

        const { saveQuestionAnswer } = this.props
        const answer = this.state.selectedOption

        saveQuestionAnswer(answer)
    }

    render () {
        const { question, timestamp, author, optionOne, optionTwo, answered, isOneAnswered, isTwoAnswered } = this.props
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const optionOnePercentage = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2)
        const optionTwoPercentage = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2)
        return (
            <Fragment>
                <MenuBar />
                <div className='form margin question-details-form'>
                    <div className='form-header'>
                        <p className='form-title'>Would You Rather</p>
                    </div>
                    {
                        answered
                        ? (
                            <div className='form-body no-bottom-round'>
                            <ul className='no-padding no-margin'>
                                <li className='fix-answered-li full-width'>
                                    <span className={isOneAnswered ? 'answered' : ''}>{optionOne}</span>
                                    {isOneAnswered ? <FaCheck className='padding-left answered'/> : null}
                                    <span className='vote-result'>{`${optionOneVotes} vote(s) | ${optionOnePercentage}%`}</span>
                                </li>
                                <li className='no-padding fix-answered-li full-width'>
                                    <div className='or-seperator'>
                                        <hr/>
                                        <p className='inline-p'>OR</p>
                                        <hr/>
                                    </div>
                                </li>
                                <li className='padding-bottom fix-answered-li full-width'>
                                    <span className={isTwoAnswered ? 'answered' : ''}>{optionTwo}</span>
                                    {isTwoAnswered ? <FaCheck className='padding-left answered'/> : null}
                                    <span className='vote-result'>{`${optionTwoVotes} vote(s) | ${optionTwoPercentage}%`}</span>
                                </li>
                            </ul>
                            </div>
                        )
                        : (
                            <form onSubmit={this.submitAnswer} className='form-body no-bottom-round'>
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

                                    <label className='radio_container'>
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
                    <div className='user-details'>
                            <ul className='user-detail-ul nav nav-account block'>
                                <li className='user-info-li inline-block'>
                                    <span className="padding-left">{author}</span>
                                </li>
                                <li className='time-stamp user-info-li block'>
                                    { timestamp }
                                </li>
                            </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps ({authedUser, questions, users}, props) {
    const { question_id } = props.match.params
    const question = questions[question_id]
    const author = users[question.author].id
    const timestamp = formatDate (question.timestamp)
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text
    const isOneAnswered = question.optionOne.votes.includes(authedUser)
    const isTwoAnswered = question.optionTwo.votes.includes(authedUser)
    const answered = isOneAnswered || isTwoAnswered

    return {
        author,
        timestamp,
        optionOne,
        optionTwo,
        answered,
        isOneAnswered,
        isTwoAnswered,
        question,
        users,
        questions,
        authedUser,
        question_id,
    }
}

function mapDispatchToProps (dispatch, props) {
    const { question_id } = props.match.params
    return {
        saveQuestionAnswer : (answer) => {
            dispatch(handleSaveQuestionAnswer(question_id, answer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails)