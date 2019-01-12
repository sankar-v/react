import React from 'react';

class Square extends React.Component{
    
    onClick(event){
        this.props.onClick(event.target.value);
    }

    render(){
        return(
            <button value={this.props.value} 
                className="square" 
                onClick = {this.onClick.bind(this)}>
                {this.props.value}
            </button>
        )
    }
}
export default Square;