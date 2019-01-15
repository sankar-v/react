import React from 'react';

const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
        <input type="text" value={value} placeholder="Enter some value"/>
        <button onClick={onIncrement}>Increase</button>
        <button onClick = {onDecrement}>Decrease</button> 
    </div>
)

export default Counter;