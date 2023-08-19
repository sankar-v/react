/* 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
 */

/* import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.querySelector("root");
if(!rootElement)
  throw new Error("Failed to find root element");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
 */
//ReactDOM.render(<App />,document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));