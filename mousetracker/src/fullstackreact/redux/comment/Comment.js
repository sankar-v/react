let comments = [
    {id: 1, author: "Cory Brown", text: "My 2 scents"},
    {id: 2, author: "Jared Anderson", text: "Let me put it this way. You've heard of Socrates? Aristotle? Plato? Morons!"},
    {id: 3, author: "Matt Poulson", text: "It's just a function!"},
    {id: 4, author: "Bruce Campbell", text: "Fish in a tree? How can that be?"}
];

const Comment = (props) => (
    <div className="comment">
        <h1 className ="commentAuthor">
            {props.author}
        </h1>
        {props.children}
    </div>
);
export default Comment;
