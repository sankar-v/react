import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './fullstackreact/redux/contactsForm/reducers';
import {createStore} from 'redux';
import AddContact  from './fullstackreact/redux/contactsForm/containers/AddContactTest';
import {toggleContactForm   } from "./fullstackreact/redux/contactsForm/actions";
const store = createStore (rootReducer);


ReactDOM.render(
    <div>
        <Provider store = {store}>
        <AddContact/>
        </Provider>
    </div>, 
document.getElementById('demo1'));

console.log(store.getState());
console.log(store.dispatch(toggleContactForm()));
console.log(store.dispatch(toggleContactForm()));
console.log(store.getState());
console.log(store.dispatch({type:'HANDLE_INPUT_CHANGE', payload:{name: 'Beautiful', surname: 'world',
email: 'greater@gmail.com',}}))
console.log(store.getState());