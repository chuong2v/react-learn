import * as types from './../actions/types'
import createReducer from './../lib/createReducer'

const todos = createReducer({}, {
  [types.ADD_TODO](state, action){
    return [
      ...state, {
      id: action.id,
      text: action.text,
      completed: false
    }];
  },
  [types.TOGGLE_TODO](state, action){
    return state.map(t => {
      if (t.id !== action.id) {
        return t
      }

      return Object.assign({}, t, {
        completed: !t.completed
      })
    })
  },
  [types.DELETE_TODO](state, action){
    let newState = [...state]
    newState.splice(state.find(t => t.id === action.id), 1)
    return newState
  },
  [types.SET_FETCHED_TODOS](state, action){
    return action.todos
  }
})

export default todos
