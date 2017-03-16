import {compose, createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './../reducers'
const loggerMiddleware = createLogger({});

export default function configureStore() {
  const initialState = {
    visibilityFilter: "SHOW_ALL",
    todos: []
  };
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware
    )
  );
  return createStore(reducers, initialState, enhancer);
}
