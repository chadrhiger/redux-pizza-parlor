import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import * as serviceWorker from './serviceWorker';

const pizzaList = (state = [], action) => {
             
}

const reduxStore = createStore(
  // combineReducers({
  // }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App /></Provider>, document.getElementById('root'));

