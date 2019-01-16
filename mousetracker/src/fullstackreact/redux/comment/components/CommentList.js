import React from 'react';
import {Comment} from './Comment';

const CommentList = ({comments}) => (
    <div>
    {
        comments.map(comment =>(
        <Comment key={comment.id} author= {comment.author} >
            {comment.text}
        </Comment>
        ))
    }
    </div>
);

export default CommentList;