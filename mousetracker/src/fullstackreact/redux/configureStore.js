import { createStore, applyMiddleware } from 'redux';
import { initialState, rootReducer } from './reducers';

import loggingMiddleware from './loggingMiddleware';
import apiMiddleware from './apiMiddleware';

export const configureStore = () => {
    const store = createStore(
        rootReducer, 
        initialState,
        applyMiddleware(
            apiMiddleware,
            loggingMiddleware,
        ) 
    );

    return store;
}

export default configureStore;