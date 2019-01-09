import React from 'react';
import {Home} from './Home';

import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom'

const About = () => (
    <div>
        <h1>About</h1>
        <Link to='/'>Go home</Link>
    </div>
);

export class Route1 extends React.Component {

    render(){
      return(
      <Router>
          <Switch>            
            <Route 
                path="/about" 
                render={(renderProps)=>(
                    <div>
                        <Link to='/about/ari'>Ari</Link>
                        <Link to='/about/nate'>Nate</Link>
                        <Route
                            path="/about/:name"
                            render={(renderProps) => (
                            <div>
                                <About name={renderProps.match.params.name} />
                                <Link to='/'>Go home</Link>
                            </div>
                            )} 
                        />
                    </div>
                )} />
            <Route
                path="/"
                render={(renderProps) => (
                    <div>
                        Home is underneath me
                        <Home {...this.props} {...renderProps} />
                    </div>
                )} 
            />
            
            </Switch>
        </Router>
      )
    }
}