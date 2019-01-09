import React from 'react';
import 'whatwg-fetch';
import './App.css';
import TimeForm from './TimeForm';

//https://stackoverflow.com/questions/47658765/objects-are-not-valid-as-a-react-child-found-object-promise/47659112

class RemoteTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: null, 
            msg: 'now', 
            tz:'PST',
        }
    }

    //https://andthetimeis.com/pst/xyz.json returns json {"dateString":"2019-01-09 01:24:55 -08:00"}
    fetchCurrentTime() { 
        fetch(this.getApiUrl())
            .then(resp => resp.json())
            .then(resp =>{
                const currentTime = resp.dateString;
                this.setState((state) =>({currentTime: currentTime}))
            });
    }
    
    //https://andthetimeis.com/pst/xyz.json
    //https://andthetimeis.com/pst/in+two+hours/xyz.json
    //https://andthetimeis.com/pst/next+monday/xyz.json
    //https://andthetimeis.com/pst/this+friday+at+noon/xyz.json
    //https://andthetimeis.com/pdt/7+hours+before+tomorrow+at+noon/xyz.json

    getApiUrl() {
        const {tz, msg} = this.state;
        const host = 'https://andthetimeis.com';
        let url = host + '/' + tz + '/' + msg + '.json';
        return url;
    }
    
    handleFormSubmit(evt) {
        this.fetchCurrentTime();
    }
 
    handleChange(newState) {
        this.setState(newState);
    }

    render() {
        const currentTime = this.state.currentTime;
        const tz = this.state.tz;
        const apiUrl = this.getApiUrl();

        return (
            <div>
                {!currentTime &&
                    <button onClick={this.fetchCurrentTime}>
                        Get the current time
                    </button>
                }
                {currentTime && <div>The current time is: {currentTime}</div>}
                <TimeForm
                    onFormSubmit={this.handleFormSubmit.bind(this)}
                    onFormChange={this.handleChange.bind(this)}
                    tz={tz}
                    msg={'now'}
                />
                <p>We'll be making a request from: <code>{apiUrl}</code></p>
            </div>
        )
    }
}

export default RemoteTime;