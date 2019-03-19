import React from 'react';
import styles from './Switch.css';

const Choice = (props) => {
    const cssClasses = [];

    if(props.active){
        cssClasses.push(styles.active);
    }
    
    return(
        <div className ='choice' 
            onClick={props.onSelect}
            className={cssClasses}
            >
            {props.label}
        </div>
    );
}

export default Choice;