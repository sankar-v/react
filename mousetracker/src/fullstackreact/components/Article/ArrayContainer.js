import PropTypes from 'prop-types';
import React from 'react';

class ArrayContainer extends React.Component {
  static propTypes = {
    component: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired
  };

  render() {
    const arr = React.Children.toArray(this.props.children);
    //alert(JSON.stringify(arr));
    return <div className="container">{arr.sort((a, b) => {
        alert(JSON.stringify(a.key)+ ":" + JSON.stringify(b.key));
        return a.key < b.key})}</div>;
  }
}

export default ArrayContainer;