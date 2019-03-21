import React from "react";

class BasicInput extends React.Component {
  
    state = {
        name: '',
        names : [],
    };

    onFormSubmit =(e)=>{
        //alert(this.refs.name.value);
        //const name = this.refs.name.value;
        const names = [...this.state.names, this.state.name];
        //const names = Object.assign({}, this.state.names, this.state.names.concat(this.state.name))
        this.setState({names:names});
        e.preventDefault();
        //this.setState( prevState => { return { names: prevState.names.concat(name)}} )
    }

    onChange =(e) => {
        const name = e.target.value;
        this.setState({name:name});
    }

    renderNames(){
            return this.state.names.map((name,idx) =>{
                    return (<li key={idx}>{name}</li>)
            }
            );
    }

    render() {        
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                    <form onSubmit={this.onFormSubmit}>
                        <input placeholder="Name" 
                                value={this.state.name} 
                                onChange={this.onChange}/>
                        <input type="submit" />                        
                    </form>
                    <div>
                            {this.renderNames()}
                    </div>
            </div>
        );
    }
}
export default BasicInput;