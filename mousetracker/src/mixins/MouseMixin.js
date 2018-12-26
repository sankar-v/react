import React from 'react';

//https://medium.com/denver-devs/replacing-mixins-in-react-1f78ff567919

const someMixin = {  
    getInitialState() {
      return {
        newNumber: 1
      }
    },
    setNewNumber(num) {
      this.setState({
        newNumber: num
      })
    }
  }
  
  const someOtherMixin = {  
    someMethod(number) {
      console.log(number)
    }
  }
  
// After (15.5)
//var React = require('react');
var createReactClass = require('create-react-class');
const Component = createReactClass({
    mixins: [
      someMixin,
      someOtherMixin
    ],
    render() {
      return <p>{this.state.newNumber}</p>
    },
    someStaticMethod(num) {
      this.setNewNumber(num)
      this.someMethod(num)
    }
});

/*
class App extends React.Component {  
  constructor(props) {
    super(props)
    this.callChildMethod = this.callChildMethod.bind(this)
  }
  callChildMethod() {
    this.refs.composer.someStaticMethod(5)
  }
  render() {
    return (
      <div>
        <button onClick={this.callChildMethod}></button>
        <Composer ref="composer" />
      </div>
    )
  }
*/

//simple javascript object - nothing react
const MouseMixin = {
    getInitialState(){
        return {x:0, y:0}
    },

    handleMouseMove(event){
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
}

export default MouseMixin;
