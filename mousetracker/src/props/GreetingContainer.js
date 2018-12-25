import React, {Component} from 'react';
import Greeting from './Greeting';

//https://www.robinwieruch.de/react-pass-props-to-component/
class GreetingContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: true,
        };
    }

    toggleShow = () =>{
        this.setState(state => ({isShow : !state.isShow}));
    }

    render(){
        const greeting = 'Welcome to React';

        return(
            <div>
                <Greeting greeting={greeting} isShow={this.state.isShow} />
                <button onClick={this.toggleShow} type='button'>
                    Toggle Show
                </button>
            </div>
        )
    }

}
/*
const GreetingContainer = () =>
(
    <div>
        <Greeting greeting1="hello world" greeting2 ="how are you" greeting3=" and how do you do">
            <input text="type something here"/>
            <button text="This is a sample button"/>
        </Greeting>
    </div>
);
*/


export default GreetingContainer;