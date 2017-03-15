import createReducer from './../lib/createReducer'
import * as types from './../actions/types';

const visibilityFilter = createReducer({}, {
  [types.SET_VISIBILITY_FILTER](state, action){ return action.filter }
})

export default visibilityFilter
