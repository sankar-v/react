import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from '../contactsForm/reducers';
import {createStore} from 'redux';

const store = createStore (rootReducer);

export const render =  () => ReactDOM.render(
    <div>
        <Provider store = {store}>
        <App/>
        </Provider>
    </div>, 
document.getElementById('demo1'));