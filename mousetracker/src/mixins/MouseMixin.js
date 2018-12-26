import Ract from 'react';

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