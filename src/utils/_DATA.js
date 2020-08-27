let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: "/images/girl-1.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: "/images/man-1.png",
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
      "uyhsfvofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johnsnow: {
    id: 'johnsnow',
    name: 'John Snow',
    avatarURL: "/images/man-2.png",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "uyhsfvofupe1dqz9emx13r": 'optionOne',
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
  cherine: {
    id: 'cherine',
    name: 'Cherine Bright',
    avatarURL: "/images/girl-2.png",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: [],
  },
  harambe: {
    id: 'harambe',
    name: 'Harambe Smith',
    avatarURL: "/images/man-3.png",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: [],
  },
  kevintan: {
    id: 'kevintan',
    name: 'Kevin Tan',
    avatarURL: "/images/man-4.png",
    answers: {
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    },
    questions: ["uyhsfvofupe1dqz9emx13r"],
  },
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'Drink Beer at night',
    },
    optionTwo: {
      votes: [],
      text: 'Ice-cream at night'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johnsnow',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'Spicy chilly crab',
    },
    optionTwo: {
      votes: ['johnsnow', 'sarahedo'],
      text: 'Clam Chowder'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'Chocolate ice-cream on waffles',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'Mapple syrup on pancakes'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'Super Supreme Pizza',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'Hawaian Pizza with Pinapple'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'Coca Cola Zero',
    },
    optionTwo: {
      votes: ['johnsnow'],
      text: 'Root Beers'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johnsnow',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johnsnow'],
      text: 'Korean BBQ',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'Supreme Salmon Sushi'
    }
  },
  "uyhsfvofupe1dqz9emx13r": {
    id: 'uyhsfvofupe1dqz9emx13r',
    author: 'kevintan',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johnsnow'],
      text: 'Oyster Omellete',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'Fried Carrot Cake'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getUser(id){
  return new Promise((res, rej) => {
    setTimeout(() => res(users[id]),1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

export function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
