import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import helpers from './helpers';
import uuid from 'uuid';

class TimerDashboard extends React.Component{
    state = {
        timers:[
            {
                title: 'Practice squat',
                project: 'Gym chores',
                id: uuid.v4(),
                elapsed: 546099,
                runningSince: Date.now(),
            },
            {
                title: 'Bake Squash',
                project: 'Kitchen Chores',
                id: uuid.v4(),
                elapsed: 1273998,
                runningSince: null,
            },
        ],
    };

    handleCreateFormSubmit = (timer) => { 
        this.createTimer(timer);
    }
    
    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    }

    handleDelete = (attrs) =>{
        this.handleDelete(attrs);
    }

    createTimer = (timer) => {
        const t = new helpers().newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        })
    }

    updateTimer = (attrs) => {
        var newTimers = this.state.timers.map((timer) => {
                if (timer.id === attrs.id){
                    return Object.assign({}, timer, 
                        {
                            title: attrs.title,
                            project: attrs.project,
                        });
                    }else{
                        return timer;
                }
            });
        this.setState({timers:newTimers});
    }

    handleTrashClick = (timerId) => {
        this.deleteTimer(timerId);
    }

    handleStartClick = (timerId) =>{
        this.startTimer(timerId);
    }

    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
    }


    deleteTimer = (timerId) =>{
        var newTimers = this.state.timers.filter(t=>t.id !==timerId);
        this.setState({timers: newTimers})
    }

    startTimer = (timerId) => {

        const now = Date.now();
        var newTimers = this.state.timers.map((timer) => {
            if (timer.id === timerId){
                return Object.assign({}, timer, 
                    {
                        runningSince: now,
                    });
                }else{
                    return timer;
            }
        });
        this.setState({timers:newTimers});
    }

    stopTimer = (timerId) => {
        const now = Date.now;
        var newTimers = this.state.timers.map((timer=>{
            if (timer.id === timerId){
                const lastElapsed = now - timer.runningSince;
                return Object.assign({}, timer, {
                    elapsed: timer.elapsed  + lastElapsed,
                    runningSince: null,
                })
            }else{
                return timer;
            }
        }));
        this.setState({timers: newTimers});
    } 
    /*
    handleDelete = (attrs) => {
        var newTimers = this.state.timers.map((timer) =>{
            if(timer.id === attrs.id){
                delete(timer);
            }else{
                return timer;
            }
        });
        this.setState({timers:newTimers});
    }
    */
    render(){
        return(
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList 
                        timers = {this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}/>

                    <ToggleableTimerForm
                        isOpen={false}
                        onFormSubmit = {this.handleCreateFormSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default TimerDashboard;