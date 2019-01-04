import React from 'react';

const Hour = (props) => {
    let {hours} = props;
    if (hours === 0) { hours = 12};
    if (props.twelveHours) { hours -= 12; }
    return (<span>{hours}</span>)
}

const Minute = ({minutes}) => {
    return(
    <div>        
    <span>{minutes < 10 && '0'}{minutes}</span>
    </div>
    )
};

const Second  = ({seconds}) => 
{
    return(
    <div>    
    <span>{seconds < 10 && '0'}{seconds}</span>
    </div>
    )
};

const Separator = ({separator}) => {
   return(
       <div>            
            <span>{separator || ':'}</span>
        </div>
   );
}

const Ampm = ({hours}) => (<span>{hours >= 12 ? 'pm' : 'am'}</span>)

export {Hour, Minute, Second, Separator, Ampm};