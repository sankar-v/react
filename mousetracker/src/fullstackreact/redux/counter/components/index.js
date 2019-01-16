import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

const Counter = ({counter, onIncrement, onDecrement}) => (
    <div>
        <input type="text" value={counter} placeholder="Enter some value"/>
        <button onClick={onIncrement}>Increase</button>
        <button onClick = {onDecrement}>Decrease</button> 
    </div>
)

//export default Counter;

const mapStateToProps = (state) =>({
        //counter : state.counter  
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onIncrement : dispatch(increment(ownProps.counter)),
    onDecrement: dispatch(decrement(ownProps.counter))    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Counter);