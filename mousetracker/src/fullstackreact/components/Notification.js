//Simplest pure component
const HelloWorld = () => (<div>Hello world</div>);

// A notification component
const Notification = (props) => {
    const {level, message} = props;
    const classNames =  ['alert', 'alert-' + level]
    return(
        <div className={classNames}>
            {message}
        </div>
    )
};

//In ES5
var ListItem = function(props) {
    var handleClick = function(event) {
      props.onClick(event);
    };
  
    return (
      <div className="list">
        <a href="#" onClick={handleClick}>
            {props.children}
        </a>
      </div>
    )
}