import React from 'react';

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

export default CommentForm;