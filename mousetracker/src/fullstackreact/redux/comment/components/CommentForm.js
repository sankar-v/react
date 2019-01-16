import React from 'react';

const CommentForm = (props) => (
    <form className="commentForm">
        <input type="text"
                name="author"
                placeholder="Your Name:"
        />
        <input type="text"
               name="text"
               placeholder="Say something..."
        />
        <button>Post</button>
    </form>
)

export default CommentForm;