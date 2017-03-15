import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './configs/configureStore'
import {fetchTodos} from './actions'
console.log(fetchTodos)

const store = configureStore();
console.log("state", store.getState())
fetchTodos();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
