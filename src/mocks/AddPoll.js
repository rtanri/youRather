import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class AddPoll extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }
    
    handleOptionOne = (e) => {
        this.setState({
            optionOne: e.target.value
        })
    }

    handleOptionTwo = (e) => {
        this.setState({
            optionTwo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo} = this.state
        this.props.addPoll(optionOne, optionTwo)
        this.setState(() => ({
            toHome: true
        }))
    }

    render () {
        const { text, optionOne, optionTwo, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        const wordLeft1 = 50 - optionOne.length
        const wordLeft2 = 50 - optionTwo.length

        return (
            <Fragment>
        
                <div className='form margin poll-details-form'>
                    <div className='form-header'>
                        <p className='form-title'>Enter Two New Options:</p>
                    </div>
                {
                    <form onSubmit={this.handleSubmit} id='addPoll-form' className='form-body'>
                        <div className='input-text-container'>
                            <textarea  
                                className='block input-text' 
                                name="optionOne" 
                                placeholder="Enter your 1st option! (less than 50 characters)"
                                value={text}
                                required
                                spellCheck="false"
                                onChange={this.handleOptionOne}
                                maxLength={100}
                                />
                                {wordLeft1 <= 30 && (
                                    <div className='word-length-option1'>
                                        {wordLeft1}
                                    </div>
                                )}

                            <textarea  
                                className='block input-text margin-bottom' 
                                name="optionTwo"
                                value={text}
                                placeholder="Enter your 2nd option! (less than 50 characters)"
                                required
                                spellCheck="false"
                                onChange={this.handleOptionTwo}
                                maxLength={100}
                                />
                                {wordLeft2 <= 30 && (
                                    <div className='word-length-option2'>
                                        {wordLeft2}
                                    </div>
                                )}
                        </div>

                        <button 
                            className='button' 
                            disabled={optionOne === "" || optionTwo === "" || optionOne.length > 50 || optionTwo.length > 50}
                        >
                        Submit
                        </button>
                       
                    </form>
                }
                </div>
            </Fragment>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addPoll: (optionOne, optionTwo) => {
            dispatch(handleAddPoll(optionOne, optionTwo))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPoll)