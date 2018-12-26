import React from 'react';

//https://dev.to/kayis/render-props-and-higher-oder-components-5628
//URL to use - https://api.github.com/users/defunkt

class Fetch extends React.Component{
    state = {result:null};

    componentDidMount(){
        fetch(this.props.url)
        .then(r => r.json())
        .then(result=> this.setState({result}))
    }
    render(){
        const {result} = this.state;
        return result ? this.props.children(result) : null;
    }
}

export default Fetch;