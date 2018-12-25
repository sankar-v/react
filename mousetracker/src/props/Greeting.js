import React, {Component} from 'react';

const Greeting = props =>
(
    <div>
        <h1>{props.greetings}</h1>
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