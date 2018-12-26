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
