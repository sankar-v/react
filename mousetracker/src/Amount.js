import React from 'react';
//https://www.robinwieruch.de/react-render-props-pattern/

const Euro = ({amount}) => <p>Euro: {amount * 0.86}</p>;
const Pound = (amount) => <p>Pound: {amount * 0.76}</p>;

class Amount extends React.Component{
    constructor(props){
        super(props);
        this.onDecrement = this.props.onDecrement;
        this.onIncrement = this.props.onIncrement;
        this.amount = this.props.amount;
    }

    render(){
        return(
            <div>
            <span>US Dollar: {this.amount} </span>
    
            <button type="button" onClick={this.onIncrement}>
              +
            </button>
            <button type="button" onClick={this.onDecrement}>
              -
            </button>
          </div>
        );
    }
}

export {Euro, Pound, Amount};