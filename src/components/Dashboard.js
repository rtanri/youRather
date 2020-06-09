import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import MenuBar from './MenuBar'
import Divider from './Divider'
import {handleInitialQuestions} from '../actions/shared'

class Dashboard extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialQuestions())
    }


    render(){
        const {answeredQuestions, /*unansweredQuestions*/} = this.props
        console.log('Answered Questions', answeredQuestions)
        return (
            <Fragment>
                <MenuBar />
                <h1 className='page-title'>Your Question Pool</h1>
                <Divider />
                {
                    answeredQuestions ? 
                    <div className='question-form margin'>
                    {this.props.questionIds.map((id) => (
                        <Question key={id} id={id}></Question>
                    ))}
                    </div>
                    : null 
                }
            </Fragment>
        )
    }
}

function mapStateToProps({questions, authedUser, users }) {
    const user = users[authedUser]

    const answeredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(user.answers)
        .sort ((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []

    const unansweredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(questions)
        .filter(questionid => !answeredQuestions.includes(questionid))
        .sort((a,b) => questions[b].timestamp -questions[a].timestamp)
        : []
    
    return {
        answeredQuestions, unansweredQuestions,
    }

}



export default connect(mapStateToProps)(Dashboard)