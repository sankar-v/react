import React, { Component } from 'react';

//https://medium.com/byteconf/render-props-in-react-6081b6fa3593
const List = props => <ul>{props.children}</ul>;
const ListItem = props => <li>{props.text}</li>;
const HeaderListItem = props => (
  <li style={{background: "red"}}>
    {props.text}
  </li>
);

const data=["Hello", "World"];
// Usage
/*
<List data={data} >
  <HeaderListItem text="Header!"/>
  {data.map(i => <ListItem text={i}/>)}
</List>
*/