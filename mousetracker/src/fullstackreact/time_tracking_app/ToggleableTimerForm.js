import React from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component{
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({isOpen: true});
    }

    /*
    handleSubmit = (obj) => {
        alert (JSON.stringify(obj));
    } 
    */
    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({isOpen:false});
    }

    //This needs to close the timerform
    //but before closing the form we need to capture the data 
    //and pass it on to the Parent..
    handleFormClose = () => {
        alert('inside toggleabletimerform')
        this.setState({isOpen: false});
    }

    render(){
        if (this.state.isOpen){
            return (
                <TimerForm 
                    onFormSubmit = {this.handleFormSubmit} 
                    onFormClose = {this.handleFormClose}
                />
            )
        }else{
            return (
                <div className = 'ui basic content center aligned segment'>
                    <button className='ui basic button icon'
                        onClick={this.handleFormOpen}>
                        <i className='plus icon'/>
                    </button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;