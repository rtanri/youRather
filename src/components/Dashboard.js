import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <h1 className='page-title'>Your Question Pool</h1>
                <div className='question-form margin'>
                    {this.props.questionIds.map((id) => (
                        <Question key={id} id={id}></Question>
                    ))}
                </div>
            </div>
            
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questionIds:Object.keys(questions)
        .sort ((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)