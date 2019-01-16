import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/App';

var demo1 = document.getElementById('demo1');

export const render = () => ReactDOM.render(
    <App />, demo1
)