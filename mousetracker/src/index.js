import React from 'react';
import ReactDOM from 'react-dom';

import TimerExample from "./fullstackreact/tutorialZine/Timer";

const Button = (props) => (
    <button >{props.label}</button>
)

class Button1 extends React.Component{
    constructor(props){
        super (props);       
    }

    renderElements(){
        alert(this.props.label);
        return(
            <div>
                <button>{this.props.label}</button>
                <button>{this.props.label}</button>
                <button>{this.props.label}</button>
            </div>
        )
    }
    render(){
        return this.renderElements();
    }
}


ReactDOM.render(
    <TimerExample start={Date.now()}/>, document.getElementById('demo1')
);

/*
ReactDOM.render(
    <Button1 label="How are you???"/>, document.getElementById('demo1')
);
*/
