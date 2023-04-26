import { combineEpics } from 'redux-observable'
import testEpics from './testepic'

export default combineEpics(testEpics)
