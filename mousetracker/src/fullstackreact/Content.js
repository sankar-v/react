import React from 'react';
import ActivityItem from './components/Timeline/ActivityItem';

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
        this.state = {
            loading:false,  //set loading to false
            activities: [], 
        };
    }

    /*
    componentDidMount(){
        const a = this.props.data;
        //alert(a);
        this.setState({ activities: a });
    }
    */
    //set up data on init
    componentDidMount(){
        this.updateData();
    }
    //Lifecycle events...
    componentWillReceiveProps(nextProps) {
        // Check to see if the requestRefresh prop has changed
        if (nextProps.requestRefresh === true) {
          this.setState({ loading: true }, this.updateData);
        }
    }
    
    // Call out to github data and refresh directory
    updateData(){
        this.setState(
            {
                loading: false,
                activities : data.sort(() => 0.5 - Math.random())
            },
            this.props.onComponentRefresh
        )
    }

    render() {
        const {loading, activities} = this.state;
        return (
            <div className ="content">
                <div className="line" />
                {/* Show loading message if loading */}
                <div>
                    {loading && <div> Loading </div>}
                    {/* Timeline item */}
                    {activities.map((a) => {
                    return(
                        <div>
                            <ActivityItem key={a.id} activity = {a}/>
                        </div>
                    )
                    })
                    }
                </div>
            </div>
          )
    }
  }

  export {Content, activities, activity} ;