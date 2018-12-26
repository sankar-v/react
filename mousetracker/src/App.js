import React, { Component } from 'react';
import logo from './logo.svg';
import MouseTracker from './renderprops/MouseTracker';
import './App.css';
import {List, ListItem, HeaderListItem} from './renderprops/ListItem';
import {Amount, Euro, Pound} from './renderprops/Amount';
import PictureContainer from './props/PictureContainer';
import GreetingContainer from './props/GreetingContainer';
import Fetch from './renderprops/Fetch';
import PhotoContainer from './constants/PhotoComponent';

//PhotoContainer
const App = () =>(
  <PhotoContainer />
);
/*
//https://dev.to/kayis/render-props-and-higher-oder-components-5628
const App = () =>
(
  <Fetch url="https://api.github.com/users/defunkt">
  {
    user => <p>{user.login}</p>
  }
  </Fetch>
);
*/

/*
const App = () =>
(
  <div>
    <GreetingContainer  />
  </div>
);
*/

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