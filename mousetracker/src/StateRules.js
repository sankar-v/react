
//https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b

class StateTest extends React.Component{
    constructor(props){
        super(props);
        this.state = { value: 0 };
    }
    componentDidMount(){
        //this will not update the state as it is  asynchronous
        this.setState({ value: this.state.value + 1});
        this.setState({ value: this.state.value + 1});
        this.setState({ value: this.state.value + 1});

        //the right way would be to update state using the function syntax
        //State is batched..
        // assuming this.state = { value: 0 };
        this.setState((state) => ({ value: state.value + 1}));
        this.setState((state) => ({ value: state.value + 1}));
        this.setState((state) => ({ value: state.value + 1}));
        //setState accepts a callback
    }

    //State appears to be synchronous but it is asynch..
    inc() {
        console.log('before: ' + this.state.test);
        this.setState({
          test: this.state.test+1
        });
        console.log('after: ' + this.state.test);
    }
    
    render() {
        return <button onClick={this.inc}>Click to update</button>
    }
    
}