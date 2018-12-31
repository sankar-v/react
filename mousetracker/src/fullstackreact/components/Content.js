import React from 'react';
import ActivityItem from './ActivityItem';

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

const data = [
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

const activities = data;
class Content extends React.Component {

    constructor(props){
        super(props);
        this.state = {activities: []};
    }

    componentDidMount(){
        const a = this.props.data;
        alert(a);
        this.setState({ activities: a });
    }

    render() {
        const activities = this.state.activities;
        return (
            <div>
            {
            activities.map((a) => {
            return(
                <div>
                    <ActivityItem activity = {a}/>
                </div>
            )
            })
            }
            </div>
          )
    }
  }

  export {Content, activities, activity} ;