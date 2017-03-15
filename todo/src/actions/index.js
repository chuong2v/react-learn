import * as types from './types'
import Api from './../lib/api'

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const setFetchedTodos = (todos) => {
  return {
    type: types.SET_FETCHED_TODOS,
    todos
  }
}

export function fetchTodos(){
  return (dispatch, getState) => {
    return Api.get('/').then(resp => {
      console.log("response from server:", resp)
      dispatch(setFetchedTodos(resp))
    })
  }
}
