import {compose, createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import reducers from './../reducers'
const loggerMiddleware = createLogger({});

export default function configureStore() {
  const initialState = {
    visibilityFilter: "SHOW_ALL",
    todos: [{
      completed: false,
      text: "chuong",
      id: 100001
    }, {
      completed: true,
      text: "html",
      id: 100000
    }]
  };
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware
    )
  );
  return createStore(reducers, initialState, enhancer);
}
