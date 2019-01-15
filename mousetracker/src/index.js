import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './fullstackreact/redux/counter/components';
import counter from './fullstackreact/redux/counter/reducers';

const store = createStore(counter);

const demoEl = document.getElementById('demo1');

const render = () => ReactDOM.render(
    <Counter    
        value={store.getState()}
        onIncrement = {() => store.dispatch({type: 'INCREMENT'})}
        onDecrement = {() => store.dispatch({type: 'DECRMENT'})} />,
        demoEl
)
store.subscribe(render);
render();