import React from 'react';

 class BasicButton extends React.Component{

  handleClick =(evt) =>{
    const btn = evt.target; 
    console.log(`The user clicked ${btn.name}: ${btn.value}`);
    let obj = {val: 10, label: btn.value}
    this.props.onClick(obj);
  }
  render(){
  return (
      <button name="button-1" value={this.props.value} onClick={(evt) => this.handleClick(evt)}>
        {this.props.label}
      </button>
    );
  }
};

export default BasicButton;
