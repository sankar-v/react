import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Timeline from '../src/fullstackreact/components/Timeline/Timeline';
import Clock from '../src/fullstackreact/components/Timer/Clock';
import FetchedTimeline from '../src/fullstackreact/FetchedTimeline';
import Container from '../src/fullstackreact/Container1';

export const load = () => {
    ReactDOM.render(<Timeline />, document.getElementById('demo1'));
    ReactDOM.render(
        <FetchedTimeline />,
            document.getElementById('fetchedTimeline')
    );
    ReactDOM.render(<Container />, document.getElementById('requestRefresh'));
    ReactDOM.render(<Clock />, document.getElementById('clock'));
};
try{
    load();
}catch(e){}
//ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();


