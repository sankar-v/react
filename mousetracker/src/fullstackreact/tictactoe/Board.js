import React from 'react';
import Square from './Square';

const calculateWinner = (squares) => {

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i =0; i < lines.length; i++){
          const [a,b,c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


class Board extends React.Component{

    /*
    constructor(props){
        super(props);
        this.state = {
            xIsNext: true,
            squares: Array(9).fill('1'),
        }
    }
    */

    handleClick(i){
        //alert(i);
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares:squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    /*
    renderSquare(i){
        return <Square value={this.state.value} onClick={this.onClick.bind(this)}/>
    }
    */
    //renderSquare method handleClick is implemented in 2 ways.. the fat arrow notation without the this binding
    // and the regular way with the this context binding..
    /* 
    renderSquare(i){
        return <Square value={this.state.squares[i]} 
            onClick={this.handleClick.bind(this, i)}/>
    }
    */
    /*
    renderSquare(i){
        return <Square value= {this.state.squares[i]}
            onClick ={() => {this.handleClick(i)}}/>
    }
    */
   renderSquare(i){
        return <Square value= {this.state.squares[i]}
                onClick ={() => {this.props.onClick(i)}}/>
    }

    render(){         
        return(
            <div>             
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;