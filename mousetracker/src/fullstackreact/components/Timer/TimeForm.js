import React from 'react';

const RemoteTime = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout(resolve(new Date().toDateString()), 3000)
    });
}

const defaultValue = 'PST';
const data = ['PST', 'MST','MDT', 'EST','UTC'];

class Select extends React.Component{
    
    constructor(props){
        super(props);
        //this.timeZones = 
        this.state = {
            defaultValue : null, //PST
            data : [], //props...['PST', 'MST','MDT', 'EST','UTC'];
        };
    }

    componentDidMount(){
        this.setState((state) => ({data : this.props.data}));
        this.setState((state) => ({defaultValue : this.props.defaultValue}));
    }

    onChange(e){
        let newTz = e.target.value;
        alert("Timezone chosen is::" + newTz);
        this.props.onTimeZoneChange(newTz);
    }

    render(){
        let i = 1;
        return(            
                <div>
                    <select onChange={this.onChange.bind(this)}>                        
                    {
                            this.state.data.map(x => (
                                <option key={i= i + 1} value={x}>{x}</option>
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
        
        const { tz, msg } = this.props;
        this.state = { tz, msg };

        /*
        this.state = {           
            msg: 'A chronic string message',
            tz: 'PST',
        }
        */
    }
   
    componentDidMount(){
        this.state.msg = this.props.msg;
        this.state.tz = this.props.tz;
    }

    onFormSubmit(e){
        e.preventDefault();
        typeof this.props.onFormSubmit === 'function' &&
            this.props.onFormSubmit(this.state);
    }

    onTextMessageChange(evt){
        //var txt = evt.target.value;
        const msg = encodeURIComponent(evt.target.value).replace(/%20/, '+');
        this.setState({msg}, this.handleChange);
        //this.setState((state) => ({msg : txt}));
    }

    handleChange(){
        typeof this.props.onFormChange === 'function' &&
            this.props.onFormChange(this.state);
    }

    onTimeZoneChange(newTimeZone){
        //alert("Inside Time Form -> onTimeZoneChange::" + newTimeZone);
        //this.setState((state) => ({tz:newTimeZone}));
        this.setState({tz}, this.handleChange);
    }
    
    render(){
        return(
        <div>
            <form onSubmit= {this.onFormSubmit.bind(this)}>
                <Select data={data} defaultValue = {this.state.tz} onTimeZoneChange = {this.onTimeZoneChange.bind(this)} />
                <span>
                    <input type="text" 
                        placeholder={this.state.msg}
                        onChange = {this.onTextMessageChange.bind(this)}
                        value = {this.state.msg} /> 
                </span>
                <input type= "submit" value= "Update Request" />                 
            </form>
        </div>
        );
    }
}

export {TimeForm, Select, RemoteTime};