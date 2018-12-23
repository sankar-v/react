import React, { Component } from 'react';

// The <Mouse> component encapsulates the behavior we need...
class Mouse extends React.Component {
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
  
          {/* ...but how do we render something other than a <p>? */}
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
          {this.props.renderTheHeading(this.state)};  
        </div>
      );
    }
  }
  
  export default Mouse;