import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from "./_DATA.js"

export function getInitialUsers() {
    return Promise.all([
        _getUsers()
    ]).then(users => ({
        users
    }))
}

export function getInitialQuestions() {
    return Promise.all([
        _getQuestions()
    ]).then(questions => ({
        questions
    }))
}

export function saveQuestionAPI (info){
    return _saveQuestion(info)
}

export function saveQuestionAnswerAPI (info){
    return _saveQuestionAnswer(info)
}

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  } 