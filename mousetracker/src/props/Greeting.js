import React, {Component} from 'react';

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

export default Greeting;