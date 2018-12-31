import React from 'react';
import Header from './Header';
import Content from './Content';
import Clock from './Clock';

const activity = {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
          id: 1,
          name: 'Nate',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [
          { from: 'Ari', text: 'Me too!' }
        ]
}

const activities = [
    {
      timestamp: new Date().getTime(),
      text: "Ate lunch",
      user: {
        id: 1, name: 'Nate',
        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
      },
      comments: [{ from: 'Ari', text: 'Me too!' }]
    },
    {
      timestamp: new Date().getTime(),
      text: "Woke up early for a beautiful run",
      user: {
        id: 2, name: 'Ari',
        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
      },
      comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
    {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
          id: 1, name: 'Nate',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
      },
      {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
          id: 2, name: 'Ari',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
      },
];


const AppContainer =() => (
    <div>
        <Header title="Timeline" />
        <Content activities = {activities}/>       
    </div>
)


class AppContainer1 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>            
                <Content />
                <Clock />            
            </div>
        )
    };
}

export default AppContainer1;