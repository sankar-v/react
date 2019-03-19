import React from 'react';
import ReactDOM from 'react-dom';

import TimerExample from "./fullstackreact/tutorialZine/Timer";
import MenuExample from "./fullstackreact/tutorialZine/MenuExample";
import { Search, libraries}  from "./fullstackreact/tutorialZine/Search";
import { ServiceChooser, Service, services} from './fullstackreact/tutorialZine/OrderForm';
import  ProductList  from './fullstackreact/voting_app/ProductList';
import TimerDashboard from './fullstackreact/time_tracking_app/TimerDashboard';
import Header from './fullstackreact/components/Header/Header';
import Counter from './fullstackreact/components/Counter/Counter';
import MapComponent from './fullstackreact/components/MapComponent/MapComponent';
import Messages from './fullstackreact/components/Messages/Messages';

const Button = (props) => (
    <button >{props.label}</button>
)

class Button1 extends React.Component{
    constructor(props){
        super (props);       
    }

    renderElements(){
        alert(this.props.label);
        return(
            <div>
                <button>{this.props.label}</button>
                <button>{this.props.label}</button>
                <button>{this.props.label}</button>
            </div>
        )
    }
    render(){
        return this.renderElements();
    }
}

/*
ReactDOM.render(
    <TimerExample start={Date.now()}/>, document.getElementById('demo1')
);
*/

// Render the menu component on the page, and pass an array with menu options
/*
ReactDOM.render(
    <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    document.getElementById('demo1')
);
*/
/*
ReactDOM.render(
    <Search items={ libraries } />, document.getElementById('demo1')
);
*/

/*
ReactDOM.render(
    <Button1 label="How are you???"/>, document.getElementById('demo1')
);
*/

// Render the ServiceChooser component, and pass the array of services
//ReactDOM.render(<ServiceChooser items={ services } />, document.getElementById('demo1'));
/*
ReactDOM.render(
    <ProductList />,
    document.getElementById('demo1')
);
*/
/*
ReactDOM.render(
    <TimerDashboard />,
    document.getElementById('content')
);
*/
/*
ReactDOM.render(
    <Header />,
    document.getElementById('content')
);
*/
/*
ReactDOM.render(
    <Counter/>,
    document.getElementById('content')
);
*/

let markers = [
    {lat: 37.773972, lng: -122.431297, title: 'San Francisco'}
];
/*
<MapComponent markers={markers}
      zoom={9} />
*/
/*TODO - Google Map integration with React is pending..
ReactDOM.render(
    <MapComponent markers = {markers} zoom={9}/>,
    document.getElementById('content')
);
*/
const data = require('..//src/fullstackreact/components/Messages/data.js')(10);
ReactDOM.render(
    <Messages messages={data.messages} users={data.users} />,
    document.getElementById('content')
);
