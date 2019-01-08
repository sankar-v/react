import React from 'react';

const RemoteTime = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout(resolve(new Date().toDateString()), 3000)
    });
}

class TimeZones extends React.Component{
    
    constructor(props){
        super(props);
        this.timeZones = ['PST', 'MST','MDT', 'EST','UTC'];
        this.state = {
            tz : 'PST',
        };
    }

    onChange(e){
        alert(e.target.value);
    }

    render(){
        let i = 1;
        return(            
                <div>
                    <select onChange={this.onChange.bind(this)}>                        
                    {
                            this.timeZones.map( tz => (
                                <option value={tz}>{tz}</option>
                            ))
                    }                
                    </select>
                </div>
        );
    }
}

class TimeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime: null,
            message: 'A chronic string message',
        }
    }

    componentDidMount(){
        this.getSetCurrentTime();
    }
    
    getSetCurrentTime(){
        var newTime = null;
        RemoteTime.
        then((time)=> {
            this.setState( {currentTime: time})
            newTime = time;    
        });
        //return newTime;
        alert("inside getSetCurrentTime::" + newTime);
    }

    updateRequest(e){

    }

    onSubmit(e){

    }
    
    render(){
        return(
        <div>
            <form onSubmit= {this.onSubmit.bind(this)}>
                <button onClick={this.getSetCurrentTime.bind(this)}>
                    Get the Current Time 
                </button>
                <TimeZones />
                <span>
                    <input type="text" 
                        placeholder="A chronice string message"
                        onChange = {this.onChange.bind(this)} /> 
                </span>
                <button onClick={this.updateRequest.bind(this)}>
                    Update Request 
                </button>
                <span>We will be taking the request from :: {this.state.message}</span>
            </form>
        </div>
        );
    }
}

export {TimeForm, TimeZones, RemoteTime};