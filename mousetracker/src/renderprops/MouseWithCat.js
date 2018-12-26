import React, { Component } from 'react';
import Cat from './Cat'

//https://medium.com/ingenious/a-tale-of-higher-order-components-render-props-a1ba47e8cfeb

class MouseWithCat extends React.Component {
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
  
          {/*
            We could just swap out the <p> for a <Cat> here ... but then
            we would need to create a separate <MouseWithSomethingElse>
            component every time we need to use it, so <MouseWithCat>
            isn't really reusable yet.
          */}
          {/*<Cat mouse={this.state} /> */}
          {this.props.renderTheHeading(this.state)};
        </div>
      );
    }
}
  
export default MouseWithCat;