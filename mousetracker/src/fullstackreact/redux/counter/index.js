import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);

const demoEl = document.getElementId('demo1');

const render = () => ReactDOM.render(
    <Counter    
        value={store.getState()}
        onIncrement = {() => store.dispatch({type: INCREMENT})}
        onDecrement = {() => store.dispatch({type: DECRMENT})} />,
        demoEl
)

render()
store.subscribe(render);