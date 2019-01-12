import React from 'react';
import {Square} from './Square1';

//5:40 to 6:05 am..-- 25 mins..
class TicTacToe extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            selectedCell : -1,
        };
    }

    onClick(key){
        alert("inside tic tac toe.." + key);
        this.setState({selectedCell : key});
    }

    renderSquares(){      
        let s = [];
        let sc = this.state.selectedCell;
        let label = 'O';
        for(let i = 0; i < 9; i++){            
            if (sc == i){
                alert ('inside');
                label = 'X';
            }else{
                label = 'O';
            }
            s.push(<Square key={i} value = {i} label = {label} onClick={this.onClick.bind(this)}/>);
        }
        return s;
    }

    render(){
        return(
            this.renderSquares()
        )
    }
}

export default TicTacToe;