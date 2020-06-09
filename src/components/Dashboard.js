import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import MenuBar from './MenuBar'
import {handleInitialQuestions} from '../actions/shared'

class Dashboard extends Component {
    state= {
        Tab: 'unanswered'
    }

    componentDidMount(){
        this.props.dispatch(handleInitialQuestions())
    }


    render(){
        const {answeredQuestions, unansweredQuestions} = this.props

        console.log('Answered Questions', answeredQuestions)

        return (
            <Fragment>
                <MenuBar />
                <h1 className='page-title'>Your Question Pool</h1>
                <ul className='divider'>
                    <li
                        className={this.state.Tab === 'unanswered' ? 'active' :''}
                        onClick={() => {this.setState({Tab: 'unanswered'})}}
                    >Unanswered
                    </li>

                    <li
                        className={this.state.Tab === 'answered' ? 'active':''}
                        onClick={() => {this.setState({Tab:'answered'})}}    
                    >Answered
                    </li>
                </ul>

                {
                    this.state.Tab === 'unanswered' && unansweredQuestions
                    ? <div className='question-form margin'>
                        {unansweredQuestions.map((id) => (
                            <Question key={id} id={id} />
                        ))}
                        </div>
                    : null 
                }

                {
                    this.state.Tab === 'answered' && answeredQuestions
                    ? <div className='question-form margin'>
                        {answeredQuestions.map((id) => (
                            <Question key={id} id={id} />
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
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []

    const unansweredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(questions)
        .filter(questionid => !answeredQuestions.includes(questionid))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []
    
    return {
        answeredQuestions, 
        unansweredQuestions,
    }

}



export default connect(mapStateToProps)(Dashboard)