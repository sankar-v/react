const Comment = (props) => (
    <div className="comment">
        <h1 className ="commentAuthor">
            {props.author}
        </h1>
        {props.children}
    </div>
);

