import React from 'react';

function alertFunction(message){
    alert("Hello!!" + message);
}

const aFunction = (message) => {
    alert("Hello :: " + message);
}

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = this.getTime();
        //this.setInitialTime();
        setInterval(()=> {
            const {hours, minutes, seconds, ampm} = this.getTime();
            this.setState((state)=> ({
                hours:hours, 
                minutes:minutes, 
                seconds: seconds, 
                ampm: ampm}));                       
        }, 3000);
    }
    
    setInitialTime(){
        const t = this.getTime();
        const displayTime = this.formatTime(t);
        this.setState((state) => ({time: displayTime}));
    }

    getTime(){
        const initialTime = new Date(),
            hours = initialTime.getHours(),
            minutes = initialTime.getMinutes(),
            seconds = initialTime.getSeconds(),
            ampm = hours >= 12 ? 'pm': 'am';
            return { 
                        hours: hours,
                        minutes : minutes,
                        seconds : seconds,
                        ampm    : ampm
            };
    }

    formatTime(time){
        const displayTime = time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
        return displayTime;
    }

    componentDidMount(){
        this.state = { time: null };
    }

    render(){
        const {hours, minutes, seconds, ampm} = this.state;
        
        return(
            <div className ="clock">
                {
                    hours == 0 ? 12 :
                    (hours > 12) ?
                    hours - 12 : hours
                }:{
                    minutes > 9 ? minutes : `0${minutes}`
                }:{
                    seconds > 9 ? seconds : `0${seconds}`
                } {ampm}
            </div>
        )
    }
}

export default Clock;