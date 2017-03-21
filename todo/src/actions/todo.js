import * as types from './types'
import Api from './../lib/api'

export const _addTodo = (todo) => {
  return {
    type: types.ADD_TODO,
    todo
  }
}


export function addTodo(text){
  return (dispatch) => {
    return Api.post('/todos', {text: text}).then(resp => {
      dispatch(_addTodo(resp))
    })
  }
}


export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

export const _toggleTodo = (id) => {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}

export const toggleTodo = (id, completed) => {
  return (dispatch) => {
    return Api.post('/todos/' + id, {completed: !completed}).then(resp => {
      dispatch(_toggleTodo(id))
    })
  }
}

export const _deleteTodo = (id) => {
  return {
    type: types.DELETE_TODO,
    id
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => {
    return Api.delete('/todos/' + id).then(resp => {
      dispatch(_deleteTodo(id))
    })
  }
}

export const setFetchedTodos = (todos) => {
  return {
    type: types.SET_FETCHED_TODOS,
    todos
  }
}

export function fetchTodos(){
  console.log('[actions][fetchTodos]')
  return (dispatch, getState) => {
    return Api.get('/todos')
      .then(resp => {
        dispatch(setFetchedTodos(resp))
      }).catch(error => console.log(error))
  }
}
