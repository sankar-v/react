import React from 'react';
import Choice from './Choice';

const CREDITCARD = 'CreditCard';
const BTC = 'BitCoin';

class Switch extends React.Component{
    state = {
        payMethod: BTC,
    }

    select = (choice) => {
        return(evt) => {
            this.setState({
                payMethod: choice,
            });
        };
    }

    render(){
        return(
            <div className='switch'>
                <Choice label='Pay with Credit Card'
                        onSelect={this.select(CREDITCARD)}
                        active={this.state.payMethod === CREDITCARD} />
                <Choice label='Pay with Bitcoin'
                        onSelect={this.select(BTC)}
                        active={this.state.payMethod === BTC}/>
                Pay with: {this.state.payMethod}
            </div>
        )
    }
}
export default Switch;