import React from 'react';

function TimerActionButton(props){
        if (props.timerIsRunning){
            return(
                <div 
                    className='ui bottom attached red basic button'
                    onClick={props.onStopClick}>   
                    Stop
                </div>
            )
        }else{
            return(
                <div 
                    className='ui bottom attached blue basic button'
                    onClick={props.onStopClick}>   
                    Start
                </div>
            )
        }
}

export default TimerActionButton;