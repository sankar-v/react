import React from 'react';

class TimerExample extends React.Component{

    constructor(props){
        super(props);
        this.state = { elapsed: 0};
    }

    // componentDidMount is called by react when the component 
    // has been rendered on the page. We can set the interval here:
    componentDidMount(){
        //this.timer = setInterval(this.tick, 50);
        this.timer = setInterval(()=>{
            this.tick();
        }, 50);
    }

    // This method is called immediately before the component is removed
    // from the page and destroyed. We can clear the interval here:
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({elapsed: new Date() - this.props.start})
    }

   
    render(){
        var elapsed = Math.round(this.state.elapsed / 100);

        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed / 10).toFixed(1);    

        // Although we return an entire <p> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
    }
}
export default TimerExample;

