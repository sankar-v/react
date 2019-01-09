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
        alert(e.target.value);
    }

    render(){
        let i = 1;
        return(            
                <div>
                    <select onChange={this.onChange.bind(this)}>                        
                    {
                            this.state.data.map(x => (
                                <option value={x}>{x}</option>
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
            displayText: 'A chronic string message',
        }
    }
   
    updateRequest(e){
        this.props.onUpdateRequest();
    }

    onSubmit(e){
        this.props.onSubmit();
    }

    onChange(evt){
        var txt = evt.text;
        this.setState((state) => ({displayText : txt}));
    }
    
    render(){
        return(
        <div>
            <form onSubmit= {this.onSubmit.bind(this)}>
                <Select data={data} defaultValue = {defaultValue}  />
                <span>
                    <input type="text" 
                        placeholder={this.state.displayText}
                        onChange = {this.onChange.bind(this)} /> 
                </span>
                <button onClick={this.updateRequest.bind(this)}>
                    Update Request 
                </button>                
            </form>
        </div>
        );
    }
}

export {TimeForm, Select, RemoteTime};