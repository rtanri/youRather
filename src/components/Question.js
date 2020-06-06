import React, {Component} from 'react'
// import {connect} from 'react-redux'

class Question extends Component {
    render(){
        return (
            <div className='form margin'>
                <div className='form-header'>
                    <p className="form-title">Would You Rather</p>
                    <hr />
                </div>

                <div className='form-body'>
                    <p className='options'>Option 1</p>
                    <div className='or-seperator'>
                        <p className='inline-p'>OR</p>
                    </div>
                    <p className='options'>Option 2</p>
                </div>
            </div>
        )
    }
}

export default Question