import {getInitialUsers, getInitialQuestions} from '../utils/api'
import {receiveUsers, saveUserAnswer, addUserQuestion } from './users'
import {receiveQuestions, saveQuestionAnswer, addQuestion} from './questions'
import {setAuthedUser} from '../actions/authedUser'
import {saveQuestionAnswerAPI} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'
import {saveQuestionAPI} from '../utils/api'

const AUTHED_ID = 'johndoe';

export function handleInitialUsers() {
    return (dispatch) => {
        return getInitialUsers()
        .then((users) => {
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}

export function handleInitialQuestions() {
    return (dispatch) => {
        return getInitialQuestions()
        .then((questions) => {
            dispatch(receiveQuestions(questions))
        })
    }
}


export function handleSaveQuestionAnswer (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestionAnswerAPI({authedUser, qid, answer})
            .then(() => {
                dispatch(saveQuestionAnswer(authedUser, qid, answer))
                dispatch(saveUserAnswer(authedUser, qid, answer))
                dispatch(hideLoading())
            })  
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const author = authedUser
        dispatch(showLoading())
        return saveQuestionAPI({optionOneText, optionTwoText, author})
            .then((question) => {
                dispatch(addQuestion(question))
                dispatch(addUserQuestion(authedUser, question.id))
                dispatch(hideLoading())
            })
    }
}