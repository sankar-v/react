import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import {increment, decrement} from './actions';

const store = createStore(counter);

const demoEl = document.getElementId('demo1');

const render = () => ReactDOM.render(
    <Counter    
        value={store.getState()}
        onIncrement = {() => store.dispatch(increment(100))}
        onDecrement = {() => store.dispatch(decrement(100))} />,
        demoEl
)

render()
store.subscribe(render);