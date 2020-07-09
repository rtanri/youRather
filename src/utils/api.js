import {
    _getUsers,
    _getUser,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA'

export function getInitialUsers() {
    return _getUsers()
        .then(users => ({
           users 
        }))
}

export function getUser(id){
    return _getUser(id)
}

export function getInitialPolls() {
    return _getQuestions()
        .then(questions => ({
            questions 
        }))
}

export function savePollAPI (info) {
    return _saveQuestion(info)
}

export function savePollAnswerAPI (info) {
    return _saveQuestionAnswer(info)
}
