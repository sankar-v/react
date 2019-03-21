import React from 'react';
import BasicButtton from './BasicButton';

class BasicForm extends React.Component{

    onClick = (args) =>{
        alert(JSON.stringify(args));
    }

    render(){
        return(
            <div>
                <h1>What do you think of React?</h1>
                <BasicButtton label= "Great" value="great" onClick={this.onClick}/>
                <BasicButtton label= "Amazing" value="amazing" onClick={this.onClick}/>
            </div>
            )
    }

}

export default BasicForm;