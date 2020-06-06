import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import MenuBar from './MenuBar'
import Divider from './Divider'

class Dashboard extends Component {
    render(){
        console.log(this.props)
        return (
            <Fragment>
                <MenuBar />
                <h1 className='page-title'>Your Question Pool</h1>
                <Divider />
                <div className='question-form margin'>
                    {this.props.questionIds.map((id) => (
                        <Question key={id} id={id}></Question>
                    ))}
                </div>
            </Fragment>
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