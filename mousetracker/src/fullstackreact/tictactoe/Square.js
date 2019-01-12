import React from 'react';

const StyleButton = () => (
  <button>Hello</button>
)

class Square extends React.Component {
    constructor(props) {
      super(props);
    }

    onButtonClick(event){
      alert(event.target.value);
      this.props.onClick(event.target.value);
    }

    componentDidMount(){
      var value = this.props.value || 'X';
      this.setState({value:value});
    }

    render() {
      return (
        <button
          className="square" value={this.props.value} onClick={this.onButtonClick.bind(this)}>          
          {this.props.label}
        </button>
      );
    }
  }

 
  export  {Square,StyleButton};