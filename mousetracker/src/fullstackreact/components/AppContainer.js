import React from 'react';
import Content from './Content';
import Header from './Header';

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

const AppContainer =() => (
    <div>
        <Header title="Timeline" />
        <Content activity={activity} />
    </div>
)

export default AppContainer;