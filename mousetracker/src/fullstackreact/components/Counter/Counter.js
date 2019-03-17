import React from 'react';

class Counter extends React.Component{
    
    static defaultProps = {
        initialValue: 125
    };

    state = {
        counter : this.props.initialValue
    };

    handleIncrease = () => (
        this.setState ({ counter: this.state.counter + 1})
    )

    handleDecrease = () => (
        this.setState({ counter: this.state.counter - 1})
    )

    render(){
        let ctr = this.state.counter;
        return(
            <div>
                <button onClick = {this.handleIncrease}>
                    Increase
                </button>
                <button onClick = {this.handleDecrease}>
                    Decrease
                </button>
                <span> {this.state.counter}</span>
            </div>
        )
    }
}

export default Counter;