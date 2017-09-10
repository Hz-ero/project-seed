import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO
} from '../actions/actionTypes.js'
import { List } from 'immutable'
import { createReducer } from 'redux-action-tools'

const handle_addTodo = (state, action) => {
  const newState = List(state)
  return newState.push({
    id: action.id,
    todo: action.todo
  })
}

const handle_editTodo = (state, action) => {
  // do some
}

const handle_deleteTodo = (state, action) => {
  const newState = List(state)
  // do some
  const delIndex = newState.findIndex(item => {
    return item.id === action.payload.todoId
  })
  return newState.splice(delIndex, 1)
}

const todos = createReducer()
  .when(ADD_TODO, handle_addTodo)
  .when(EDIT_TODO, handle_editTodo)
  .when(DELETE_TODO, handle_deleteTodo)
  .build([])

export default todos
