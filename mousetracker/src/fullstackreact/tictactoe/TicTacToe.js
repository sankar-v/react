import React from 'react';
import Square from './Square';

//5:40 to 6:05 am..-- 25 mins..
class TicTacToe extends React.Component{
    
    constructor(props){
        super(props);
        this.unselected = 'O';
        this.selected =  'X';
         this.state = {
            squares = [ ['O','O','O'], 
                        ['O','O','O'], 
                        ['O','O','O']
                    ],
            selectedSquare = 'X',
        }
    }

    initializeBoard(){
        let sqs = this.state.squares;
        for (var i=0; i < 3; i++){
            for(var j=0; i < 3; j++ ){
               sqs[i][j] = 'O'; 
            }
        }
    }
    renderSquares(){
        var ret = [];
        for (var i=0; i < 3; i++){
            for(var j=0; i < 3; j++ ){
               var label = sqs[i][j];
               ret.append(<Square key={i} value={label}/>);
            }
        }
        return ret;
    }

    render(){
        return(
            this.renderSquares()
        )
    }
}