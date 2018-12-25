import React, {Component} from 'react';

const Greeting = props =>
(
    <div>
        <h1>{props.greeting1}! {props.greeting2} !! {props.greeting3}</h1>
        <h2>{props.children}</h2>
    </div>    
)

/*
class Greeting extends React.Component{
    constructor(props){
        super(props);    
    }

    render(){
        const greetings = "hello there!!";
        return(
            <div>
                <h1>{ this.props.greetings }</h1>
            </div>
        )
    }
}
*/

export default Greeting;