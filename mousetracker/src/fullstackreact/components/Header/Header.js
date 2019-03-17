import React from 'react';

const Header = (props) =>(
    <h1>{props.headerText} { props.label} </h1>
);

Header.defaultProps = {
    headerText : 'Hello world',
    label: "How are you"
}
export default Header;