import React from 'react';

class ActivityItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const activity = this.props.item;
        const user = activity.user;
        return(
        <div>
            <div className="avatar">
                <img alt={activity.text} src={user.avatar} />
                {user.name}
            </div>
            <span className="time">
                {activity.timestamp}
            </span>
            <p>{activity.text}</p>
            <div className="commentCount">
                {activity.comments.length}
            </div>
        </div>
      )
    }
};

export default ActivityItem;