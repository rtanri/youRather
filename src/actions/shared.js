import {getInitialUsers, getInitialQuestions} from '../utils/api'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import {setAuthedUser} from '../actions/authedUser'

const AUTHED_ID = null;

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