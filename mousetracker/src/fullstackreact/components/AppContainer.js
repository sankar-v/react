import React from 'react';
import Header from './Header';
import { Content, activities, activity} from './Content';
import Clock from './Clock';
import Container from './Container';

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
                <Content data = {activities}/>
                <Clock />            
            </div>
        )
    };
}

const AppContainer2 = () =>(
    <div>
        <Container />       
    </div>
)

export {AppContainer, AppContainer1, AppContainer2};