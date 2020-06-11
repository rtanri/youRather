import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Question extends Component {
    render(){
        const {question} = this.props

        if (question === null) {
            return <p>Sorry, this question doesn't exist</p>
        }

        const {optionOne, optionTwo} = question
        const {id} = this.props

        return (
                <Link to={`/questions/${id}`} className='form margin question-form'>
                    <div className='form-header'>
                        <p className="form-title">Would You Rather</p>
                        <hr />
                    </div>

                    <div className='form-body'>
                        <p className='optionOne'>{optionOne.text}</p>
                        <div className='or-seperator'>
                            <p className='inline-p'>OR</p>
                        </div>
                        <p className='optionTwo'>{optionTwo.text}</p>
                    </div>
                </Link>
        )
    }
}

function mapStateToProps({authedUser, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question,
        id,
    }
}

export default connect(mapStateToProps)(Question)