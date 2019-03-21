import React from 'react';

 class BasicButton extends React.Component{

  handleClick =(evt) =>{
    let obj = {val: 10, label: evt.target.value}
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
