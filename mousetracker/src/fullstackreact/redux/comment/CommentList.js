const CommentList = (props) => (
    <div>
    {
        props.comments.map(comment =>(
        <Comment key={comment.id} author= {comment.author} >
            {comment.text}
        </Comment>
        ))
    }
    </div>
);