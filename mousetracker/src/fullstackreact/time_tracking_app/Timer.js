import React from 'react';
import helpers from './helpers';
import TimerActionButton from './TimerActionButton';

class Timer extends React.Component{

    componentDidMount() {
        this.forceUpdateInterval = setInterval(()=> this.forceUpdate(), 50);
    }

    componentWillUnmount(){
        clearInterval(this.forceUpdateInterval);
    }

    handleEdit = () => {
        let timer = {
                id: this.props.id, 
                title:this.props.title,
                project:this.props.project};

        this.props.onEditClick(timer);
    }

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    }

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    }

    handleStopClick = () => {
        this.props.onStopClick(this.props.id);
    }

    render(){
        const elapsedString = new helpers().renderElapsedString(
            this.props.elapsed, this.props.runningSince);
            //alert(this.props.elapsed + ':' + this.props.runningSince);
            return(
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className='extra content'>
                        <span className='right floated edit icon'>
                            <i className= 'edit icon' onClick={this.handleEdit}/>
                        </span>
                        <span className='right floated trash icon'>
                            <i className= 'trash icon' onClick={this.handleTrashClick}/>
                        </span>
                    </div>
                </div>
                {/**
                <div className='ui bottom attached blue basic button'>
                    Start
                </div>
                **/}
                <TimerActionButton 
                    label={'Start'} 
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick = {this.handleStartClick}
                    onStopClick = {this.handleStopClick}/>
            </div>
        )
    }
}

export default Timer;