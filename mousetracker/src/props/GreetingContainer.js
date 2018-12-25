import React, {Component} from 'react';
import Greeting from './Greeting';

const GreetingContainer = () =>
(
    <div>
        <Greeting greeting1="hello world" greeting2 ="how are you" greeting3=" and how do you do">
            <input text="type something here"/>
            <button text="This is a sample button"/>
        </Greeting>
    </div>
);

export default GreetingContainer;