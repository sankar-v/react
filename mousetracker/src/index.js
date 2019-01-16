import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './fullstackreact/redux/counter/reducers';
import App from './fullstackreact/redux/counter/containers/App';

const store = createStore(counter);
//const demoEl = document.getElementById('demo1');

/*
const render = () => ReactDOM.render(
    <Counter    
        value={store.getState()}
        onIncrement = {() => store.dispatch(increment(100))}
        onDecrement = {() => store.dispatch({type: 'DECRMENT', counter : 200})} />,
        demoEl
)
*/
/*
const render = () => ReactDOM.render(
    <Counter />, demoEl
)
store.subscribe(render);
*/
//render();
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('demo1')
);