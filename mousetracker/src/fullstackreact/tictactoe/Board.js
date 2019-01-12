import React from 'react';
import Square from './Square';

class Board extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value : 'X',
            squares: Array(9).fill('1'),
        }
    }

    handleClick(i){
        //alert(i);
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares:squares});
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
    renderSquare(i){
        return <Square value= {this.state.squares[i]}
            onClick ={() => {this.handleClick(i)}}/>
    }

    render(){
        const status = 'Next player: X';

        return(
            <div>
                <div className="status">{status}</div>
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