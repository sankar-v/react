import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { App } from './containers/App';
import commentsReducer  from './reducers';
import { data } from './components/Comment';
import { addComment } from './actions';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import CommentBox from './containers/CommentBox';
import { Provider } from 'react-redux';

const store = createStore (commentsReducer);

//testing
const { getState, dispatch } = store;
data.map(comment => dispatch(addComment(comment)));
//console.log(getState());

/*
export const render = () => ReactDOM.render(
    <App/>, document.getElementById("demo1")
)
*/

export const render = () => ReactDOM.render(
    <div className = "commentBox">
        <CommentList comments={store.getState().items} />
        <CommentForm author={store.getState().author}
                text={store.getState().text} />
    </div>, document.getElementById("demo1")
)

export const render2 = () => ReactDOM.render(
    <Provider store={store} >
        <div className="commentBox">
            <CommentList comments={data} />
            <CommentForm  />
        </div>
    </Provider>, document.getElementById("demo1")
)


export const render1 = () => ReactDOM.render(
    <Provider store={store} >
        <div className="commentBox">
            <CommentBox />
        </div>
    </Provider>, document.getElementById("demo1")
)
