import logger from './logger'
import thunk from './redux-thunk'
import {applyMiddleware} from 'thunk'

export default applyMiddleware ({
    thunk,
    logger
})