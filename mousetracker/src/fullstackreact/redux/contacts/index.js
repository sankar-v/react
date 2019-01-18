import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import reducers from './reducers'; 

const createStoreWithMiddleware = applyMiddleware()(createStore);

export const render = () => ReactDOM.render(
<div>
  <Provider store={createStoreWithMiddleware(reducers)}>
   <App />
  </Provider>
</div>
, document.getElementById('demo1'));
