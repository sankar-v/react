import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimerDashboard extends React.Component{
    state = {
        timers:[
            {
                title: 'Practice squat',
                project: 'Gym chores',
                id: '12345',
                elapsed: 546099,
                runningSince: Date.now(),
            },
            {
                title: 'Bake Squash',
                project: 'Kitchen Chores',
                id: '345678',
                elapsed: 1273998,
                runningSince: null,
            },
        ],
    };

    render(){
        return(
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList 
                        timers = {this.state.timers}/>
                    <ToggleableTimerForm
                        isOpen={false}
                    />
                </div>
            </div>
        );
    }
}

export default TimerDashboard;