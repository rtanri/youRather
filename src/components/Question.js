import React, {Component} from 'react'
import {connect} from 'react-redux'

class Question extends Component {
    render(){
        const {question} = this.props

        if (question === null) {
            return <p>Sorry, this question doesn't exist</p>
        }

        const {optionOne, optionTwo} = question

        return (
            <div className='form margin'>
                <div className='form-header'>
                    <p className="form-title">Would You Rather</p>
                    <hr />
                </div>

                <div className='form-body'>
                    <p className='optionsOne'>{optionOne.text}</p>
                    <div className='or-seperator'>
                        <p className='inline-p'>OR</p>
                    </div>
                    <p className='optionsTwo'>{optionTwo.text}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question,
    }
}

export default connect(mapStateToProps)(Question)