import React from 'react';
import PropTypes from 'prop-types';


const counterStyle = {
    width: '50px',
    textAlign: 'center',
    backgroundColor: 'aliceblue',
    padding: '10px'
};

class Counter extends React.Component{
    
    static defaultProps = {
        initialValue: 125
    };

    state = {
        counter : this.props.initialValue
    };

    /*
    handleIncrease = () => (
        this.setState ({ counter: this.state.counter + 1})
    )
    */
    handleIncrease = () => (
        this.setState (prevState =>{
            return {
                counter : prevState.counter + 1
                }
            }
        )
    )

    handleDecrease = () => (
        /*this.setState({ counter: this.state.counter - 1})*/
        this.setState(prevState => {
                return {
                    counter: prevState.counter - 1
                }
            }
        )
    )

    render(){
        let ctr = this.state.counter;
        return(
            <div style={counterStyle} key="counter">
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

Counter.propTypes = {
    initialValue: PropTypes.number
}

export default Counter;