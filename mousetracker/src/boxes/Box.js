import React from 'react';

//We can also pass the styling directly style={{color: 'pink'}}
//https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

export default Box;