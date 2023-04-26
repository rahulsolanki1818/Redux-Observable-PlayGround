import { combineEpics, ofType } from 'redux-observable'
import { concat, mergeMap, Observable } from 'rxjs'

function dispatchTest(dispatch) {
  dispatch({
    type: 'UPDATE_TODO_TEXT',
    payload: { id: 1, text: 'Something new' },
  })
  dispatch({ type: 'UPDATE_TODO' })
  dispatch({ type: 'EDIT_TODO' })
}

function testingEpic(action, store) {
  return action.pipe(
    ofType('TESTING_EPIC'),
    mergeMap(action => {
      console.log('testingEpic', action)
      let multiDispatcher = new Observable(subscriber => {
        dispatchTest(subscriber.next.bind(subscriber))
        subscriber.complete()
      })
      return multiDispatcher
      // return [
      //   {
      //     type: 'UPDATE_TODO_TEXT',
      //     payload: { id: 1, text: 'Something new' },
      //   },
      // ]
    }),
  )
}

function updateTodo(action, store) {
  return action.pipe(
    ofType('UPDATE_TODO'),
    mergeMap(action => {
      console.log('updateTodo called', action)
      return []
    }),
  )
}

function editTodo(action, store) {
  return action.pipe(
    ofType('EDIT_TODO'),
    mergeMap(action => {
      console.log('Edit todo called', action)
      return []
    }),
  )
}

const testEpics = combineEpics(testingEpic, updateTodo, editTodo)

export default testEpics
