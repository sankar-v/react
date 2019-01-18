import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import MainReducer from './reducers/MainReducer';
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)

export const render = () => {
    ReactDOM.render(
        <div>
            <Provider store={store}>
            <App />
            </Provider>
        </div>,
    document.getElementById('demo1')) };
//registerServiceWorker();
//render();
