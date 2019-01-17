import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { App } from './containers/App';
import commentsReducer  from './reducers';

const store = createStore (commentsReducer);

export const render = () => ReactDOM.render(
    <App/>, document.getElementById("demo1")
)