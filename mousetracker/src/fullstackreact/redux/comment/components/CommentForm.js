import React from 'react';

const CommentForm = (props) => (
    <form className="commentForm"
        onSubmit= { (e) => {
            e.preventDefault();
            props.onCommentSubmit();
            }
        }
    >
        <input type="text"
                name = "author"
                placeholder="Your Name"
                value = { props.author }
                onChange = { (e) => props.onAuthorChange(e.target.value)} />
        
        <input type="text"
                name="text"
                placeholder="Say something..."
                value = { props.text }
                onChange= {(e) => props.onTextChange(e.target.value)} />
        <button>Post</button>
    </form>
)
/*
class CommentForm extends React.Component{
    
    constructor(props){
        super(props);
        this.comments = [];
    }
    
    render(){    
        return(    
            <form className="commentForm" 
                onSubmit={ (e) => {
                    e.preventDefault();
                    this.comments = [
                        ...this.comments,
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
    }
}
*/
export default CommentForm;