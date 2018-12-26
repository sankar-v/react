import React, {Component} from 'react';

const wrapWithFetch = Wrapped =>
    class Fetch extends React.Component{
        state = { result :null};

        componentDidMount(){
            fetch(this.props.url)
            .then(r=> r.json())
            .then(result=> this.setState({result}))
        }
        render(){
            const {result} = this.state;
            return result ? <Wrapped data = {result}/> : null;
        }
    }


    //Stateless component that displays text
    const Text = ({data})=> <p>{data.name}</p>

    //Wrapped text that gets data
    const FetchText = wrapWithFetch(Text);

    //Usage 
    <FetchText url="https://api.github.com/users/defunkt"/>