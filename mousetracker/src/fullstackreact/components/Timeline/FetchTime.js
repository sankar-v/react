import React from 'react';
import 'whatwg-fetch';

class FetchTime extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            currentTime: null,
            tz : 'PST',
            dayString: 'now'
        };
        setInterval(()=>{
            this.fetchTime();
        }, 3000);
    }

    componentDidMount(){

    }

    //https://andthetimeis.com/pst/now/result.json
    getUrl(){
        let {tz, dayString} = this.state;
        let d = 'https://andthetimeis.com/';
        let url = d + tz + '/' + 'result.json'
        //alert(url);
        return url;
    }

    fetchTime(){
        let t = null;

        fetch(this.getUrl())
            .then(resp => resp.json())
            .then(resp =>{
                const currentTime = resp.dateString;
                this.setState({currentTime});
            });
    }

    render(){
        return (<h1>{this.state.currentTime}</h1>)
    }
}

export default FetchTime;