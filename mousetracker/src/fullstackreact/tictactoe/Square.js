import React from 'react';

class Square extends React.Component{
    onButtonClick(event){
        alert(event.target.value);
    }
    render(){
        return(
            <button className = "square" onClick = {this.onButtonClick.bind(this)}/>            
        )
    }
}

export default Square;