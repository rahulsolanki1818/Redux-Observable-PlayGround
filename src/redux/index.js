import { applyMiddleware, legacy_createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics'
import rootReducer from './reducers'
import { initialState as todoInitialState } from './reducers/todo'

const initialState = {
  todo: todoInitialState,
}

const epicMiddleware = createEpicMiddleware()

const store = legacy_createStore(
  rootReducer,
  initialState,
  applyMiddleware(epicMiddleware),
)

epicMiddleware.run(rootEpic)

export default store
