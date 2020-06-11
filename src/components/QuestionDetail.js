import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import MenuBar from './MenuBar'
import {formatDate} from '../utils/api'

class QuestionDetail extends Component {
    render () {
        const { timestamp, username, optionOne, optionTwo } = this.props

        return (
            <Fragment>
                <MenuBar />
                <div className='form margin question-details-form'>
                    <div className='form-header'>
                        <p className='form-title'>Would You Rather</p>
                    </div>
                    <div className='form-body no-bottom-round'>
                        <div className='radio_container-div'>
                            <label className='radio_container'>
                                <span className='input_radio'>{optionOne}</span>
                                <input className='hide' type="radio" defaultChecked='checked' name='select_option'/>
                                <span className='checkmark'></span>
                            </label>

                            <label className='radio_container'>
                                <span className='input_radio'>{optionTwo}</span>
                                <input className='hide' type="radio" name='select_option'/>
                                <span className='checkmark'></span>
                            </label>
                        </div>

                        <button className='button' onClick={this.handleLogin}>Submit</button>
                    </div>
                    <div className='user-details'>
                            <ul className='user-detail-ul nav nav-account block'>
                                <li className='user-info-li inline-block'>
                                    <span className="padding-left">{username}</span>
                                </li>
                                <li className='time-stamp user-info-li block'>
                                    {timestamp}
                                </li>
                            </ul>
                        </div>
                        <p className='optionTwo'>{optionTwo.text}</p>
                    </div>
            </Fragment>
        )
    }
}

function mapStateToProps ({authedUser, questions, users}, props) {
    const { question_id } = props.match.params
    const question = questions[question_id]
    const username = users[question.author].di
    const timestamp = formatDate (question.timestamp)
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text

    return {
        username,
        timestamp,
        optionOne,
        optionTwo,
    }
}

export default connect(mapStateToProps)(QuestionDetail) 