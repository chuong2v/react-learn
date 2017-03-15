import * as types from './../actions/types'
import createReducer from './../lib/createReducer'

const todos = createReducer({}, {
  [types.ADD_TODO](state, action){
    return [...state, action.todo];
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
    let index = state.findIndex(t => t.id === action.id);
    newState.splice(index, 1)
    return newState
  },
  [types.SET_FETCHED_TODOS](state, action){
    return action.todos
  }
})

export default todos
