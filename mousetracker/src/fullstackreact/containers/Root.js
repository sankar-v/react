import React from 'react';
import ReduxApp from './ReduxApp';
import { Provider } from 'react-redux';
import {configureStore} from '../redux/configureStore';

const Root = (props) => {
    const store = configureStore();
    return (
        <Provider store= {store}>
            <ReduxApp />
        </Provider>
    );
}

export default Root;