import React, { Component } from 'react';
import logo from './logo.svg';
import MouseTracker from './MouseTracker';
import './App.css';
import {List, ListItem, HeaderListItem} from './ListItem';
import {Amount, Euro, Pound} from './Amount';

/*
const App = () =>
(
  <div>
    <MouseTracker  />
  </div>
);
*/
//Lifting state from Amount to App to display the Euro and Pound signs..
/*
const App = () =>
(
  <div>
    <Amount />    
  </div>
)
*/

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      amount : 0,
    };
  }

  onIncrement = () =>{
      this.setState(state => ({amount : state.amount + 1 }));
  }

  onDecrement = () => {
      this.setState(state => ({amount : state.amount - 1}));
  }

  render(){
    return(
        <div>
        <Amount 
          amount = {this.state.amount}
          onIncrement = {this.onIncrement}
          onDecrement = {this.onDecrement}
        />
        <Euro amount={this.state.amount}/>
        <Pound amount={this.state.amount}/>
      </div>
    );
  }
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/
export default App;