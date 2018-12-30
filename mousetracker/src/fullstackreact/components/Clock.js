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
        this.state = { time: null };
        this.setInitialTime();
        setInterval(()=> {
            const displayTime = this.getDisplayTime();        
            this.setState((state)=> ({time: displayTime}));                       
        }, 3000);
    }
    
    setInitialTime(){
        this.setState((state) => ({time: this.getDisplayTime()}));
    }

    getDisplayTime(){
        const initialTime = new Date(),
            hours = initialTime.getHours(),
            minutes = initialTime.getMinutes(),
            seconds = initialTime.getSeconds(),
            ampm = hours >= 12 ? 'pm': 'am';
        const displayTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
        return displayTime;
    }

    componentDidMount(){
        this.state = { time: null };
    }
    render(){
        const currentTime = new Date(),
                hours = currentTime.getHours(),
                minutes = currentTime.getMinutes(),
                seconds = currentTime.getSeconds(),
                ampm = hours >= 12 ? 'pm': 'am';
        //alert(time.toDateString());
        /*
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
        */
       return(
           <div><h1>{this.state.time}</h1></div>
       )
    }
}

export default Clock;