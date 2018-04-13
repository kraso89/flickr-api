import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './App.css'

// Import Views
import Home from './views/Home'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
            <Home />
      </Provider>

    )
  }
}

export default App
