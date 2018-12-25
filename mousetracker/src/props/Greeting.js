import React, {Component} from 'react';

const Greeting = ({greeting, isShow}) =>
(
    isShow ? <h1>{greeting}</h1> : null
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