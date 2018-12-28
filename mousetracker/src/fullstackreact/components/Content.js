import React from 'react';

class Content extends React.Component {

    render() {
        const {activity} = this.props;//ES6 destructuring
        return (
        <div className="content">
          <div className="line"></div>
  
          <div className="item">
          <div className="avatar">
            <img
              alt={activity.text}
              src={activity.user.avatar} />
            {activity.user.name}
          </div>

          <span className="time">
            {activity.timestamp}
          </span>
          <p>{activity.text}</p>
          <div className="commentCount">
            {activity.comments.length}
          </div>
          </div>
  
          {/* ... */}
  
        </div>
      )
    }
  }

  export default Content;