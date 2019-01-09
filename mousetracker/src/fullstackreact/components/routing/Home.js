import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom'

export const Home = () => (
    <div>
        <h1>Home</h1>
        <Link to='/about'>Go to about</Link>
    </div>
)