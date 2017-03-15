import * as types from './types'
import Api from './../lib/api'

export const _addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}


export function addTodo(dispatch, text){
  return Api.post('/todos', {text: text}).then(resp => {
    console.log("response from server:", resp)
    dispatch(_addTodo(resp))
  })
}


export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const _toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const toggleTodo = (dispatch, id, completed) => {
  return Api.post('/todos/' + id, {completed: !completed}).then(resp => {
    console.log("response from server:", resp)
    dispatch(_toggleTodo(id))
  })
}

export const _deleteTodo = (id) => {
  console.log("id", id)
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const deleteTodo = (dispatch, id) => {
  return Api.delete('/todos/' + id).then(resp => {
    console.log("response from server:", resp)
    dispatch(_deleteTodo(id))
  })
}

export const setFetchedTodos = (todos) => {
  return {
    type: types.SET_FETCHED_TODOS,
    todos
  }
}

export function fetchTodos(dispatch){
  console.log("[actions][fetchTodos]")
    return Api.get('/todos').then(resp => {
      console.log("response from server:", resp)
      dispatch(setFetchedTodos(resp))
    })
}
