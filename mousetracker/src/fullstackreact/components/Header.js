import React from 'react';
import '../styles/Timeline.css';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = { inputText: 'Type your text here...',};
    }

    getInitialState(){
        return {value: 'Hello!'};
    }

    handleChange = (event) =>{
        const v = event.target.value;
        alert(v);
        this.setState(state => ({inputText: {v}}));
    }

    render(){
        return(
            <div className="header">
                <div className = "menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>
               
                <span className="title">{this.props.title}</span>
                
                <input 
                    type="text"
                    text = {this.state.inputText}
                    className="searchInput"
                    placeholder="Search ..."  onChange={this.handleChange}/>

                <button>{this.state.inputText}</button>    
                <div className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}

export default Header;