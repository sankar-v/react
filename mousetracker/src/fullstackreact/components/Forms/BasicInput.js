import React from "react";

class BasicInput extends React.Component {
  
    state = {
        names : [],
    };

    onFormSubmit =(e)=>{
        alert(this.refs.name.value);
        const name = this.refs.name.value;
        const names = [...this.state.names, name];
        e.preventDefault();
        this.setState({names:names});
        //this.setState( prevState => { return { names: prevState.names.concat(name)}} )
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
                        <input placeholder="Name" ref="name" />
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