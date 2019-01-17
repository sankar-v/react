import React from 'react';

const CommentForm = (props) => (
    
    <form className="commentForm" 
        onSubmit={ (e) => {
            e.preventDefault();
            comments = [
                ...comments,
                    {
                        author: e.target.elements.author.value,
                        text: e.target.elements.text.value
                    }
                ]
            }
        }
    >
        
    
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