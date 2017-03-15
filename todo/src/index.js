import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './configs/configureStore'

const store = configureStore();
console.log("state", store.getState())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
