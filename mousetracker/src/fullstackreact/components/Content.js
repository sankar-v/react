import React from 'react';
import ActivityItem from './ActivityItem';

class Content extends React.Component {

    render() {
        const activity = this.props.activity;
        return (
            <div className="content">
              <div className="line">
                {<ActivityItem item = {activity}/>}
              </div>
              {/* ... */}
            </div>
          )
    }
  }

  export default Content;