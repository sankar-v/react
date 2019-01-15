import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './fullstackreact/redux/todo/reducers/index';
import App from './fullstackreact/redux/todo/components/App';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('demo1')
);