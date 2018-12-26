import React, { Component } from 'react';
import Mouse from './Mouse';
import Cat from './Cat';
import Tooltip from  '../boxes/Tooltip';

//Be careful when using Render Props with React.PureComponent
const MouseTracker = () =>(
    <div>
        <h1>Move the mouse around!</h1>
        {/*
        <Mouse 
            renderTheHeading={
                mouse => (<Cat mouse={mouse} />) 
            }
            renderTooltip = {
                (mouse) =>(<Tooltip mouse= {mouse} />)
            }
        />
        */}
        {/*uses the children Property directly*/ }
        <Mouse> 
        {mouse=>
          (
              <p>The mouse position is {mouse.x}, {mouse.y}</p>
          )
        }      
        </Mouse>
    </div>     
);
/*
class MouseTracker extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          <h1>Move the mouse around!</h1>
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        </div>
      );
    }
  }
*/

export default MouseTracker;