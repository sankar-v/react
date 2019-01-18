import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { createStore } from 'react-redux';
import { authorChange, textChange, addComment } from '../actions';

//https://github.com/uniqname/react-redux-tutorial/blob/101/public/scripts/final.js
class CommentBox extends React.Component {
    componentDidMount(){
        const { store } = this.context;
        console.log("inside componentDidMount::" + store);
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render(){
        //console.log(this.context);
        const { items, author, text } = this.context.store.getState();
        const { store } = this.context;
        return(
            <div className = "commentBox">
                <h1>Comments</h1>
                <CommentList comments = {items} />
                <CommentForm author = {author} text = {text} 
                    onCommentSubmit = {
                         () => store.dispatch(addComment({author, text})) 
                    }
                    onAuthorChange = {
                        (author) => store.dispatch(authorChange(author))
                    }
                    onTextChange = {
                        (text) => store.dispatch(textChange(text))
                    }
                />
            </div>
        )
    }
}

CommentBox.contextTypes = {
    store: PropTypes.object,
}

export default CommentBox;