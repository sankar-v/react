import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <div class="tooltip">Hover over me<span class="tooltiptext">Tooltip text</span>
        </div>
      );
    }
}

export default Tooltip;