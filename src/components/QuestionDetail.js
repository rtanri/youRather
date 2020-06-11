import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import MenuBar from './MenuBar'

class QuestionDetail extends Component {
    render () {
        const { optionOne, optionTwo } = this.props.question
        const {authedUser} = this.props

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
                                <span className='input_radio'>{optionOne.text}</span>
                                <input className='hide' type="radio" defaultChecked='checked' name='select_option'/>
                                <span className='checkmark'></span>
                            </label>

                            <label className='radio_container'>
                                <span className='input_radio'>{optionTwo.text}</span>
                                <input className='hide' type="radio" name='select_option'/>
                                <span className='checkmark'></span>
                            </label>
                        </div>

                        <button className='button' onClick={this.handleLogin}>Submit</button>
                    </div>
                    <div className='user-details'>
                            <ul className='user-detail-ul nav nav-account block'>
                                <li className='user-info-li inline-block'>
                                    <span className="padding-left">{authedUser}</span>
                                </li>
                                <li className='time-stamp user-info-li block'>
                                    h:mm:PM | month/day/year
                                </li>
                            </ul>
                        </div>
                        <p className='optionTwo'>{optionTwo.text}</p>
                    </div>
            </Fragment>
        )
    }
}

function mapStateToProps ({authedUser, questions}, props) {
    const { question_id } = props.match.params
    const question = questions[question_id]

    return {
        question_id,
        question,
        authedUser,
    }
}

export default connect(mapStateToProps)(QuestionDetail) 