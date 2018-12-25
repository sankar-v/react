import React, { Component } from 'react';
import logo from './logo.svg';
import MouseTracker from './MouseTracker';
import './App.css';
import {List, ListItem, HeaderListItem} from './ListItem';
import {Amount, Euro, Pound} from './Amount';
import PictureContainer from './PictureContainer';
import GreetingContainer from './props/GreetingContainer';


const App = () =>
(
  <div>
    <GreetingContainer  />
  </div>
);


/*
const App = () =>
(
  <div>
    <PictureContainer  />
  </div>
);
*/

/*
const App = () =>
(
  <div>
    <MouseTracker  />
  </div>
);
*/
//Restoring state to Amount component and reverting back to stateless compoent for App
//with this pattern amount can be passed to children component using Amount and need not be 
//set at App level
/*
const App = () =>
(
  <Amount>
  {
    amount =>(
    <div>
      <Pound amount={amount} />
      <Euro amount={amount} />
    </div> 
  )
  }
  </Amount>
);
*/

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