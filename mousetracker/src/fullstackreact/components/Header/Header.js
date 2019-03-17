import React from 'react';

/*
const Header = (props) =>(
    <h1>{props.headerText} { props.label} </h1>
);
*/

class Header extends React.Component{
    static defaultProps = {
        headerText: "Hello world",
        label: " How are you"
    }; 

    render(){
        return(
        <h1>{this.props.headerText} {this.props.label}</h1>
        );
    }
}
/*
Header.defaultProps = {
    headerText : 'Hello world',
    label: "I am fine"
}
*/
export default Header;