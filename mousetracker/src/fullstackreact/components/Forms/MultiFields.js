import React from "react";

class MultiFields extends React.Component {
  
    state = {
        people: [],
        fields : {
            name:'',
            email: ''
        },  
    };

    onFormSubmit =(e)=>{
        //alert(this.refs.name.value);
        //const name = this.refs.name.value;
        const people = [...this.state.people, this.state.fields];
        //const names = Object.assign({}, this.state.names, this.state.names.concat(this.state.name))
        this.setState({
            people,
            fields:{
                name: '',
                email: ''
            }
        });
        e.preventDefault();
        //this.setState( prevState => { return { names: prevState.names.concat(name)}} )
    }

    onChange =(e) => {
        const ctl = e.target;
        const name = ctl.name;
        const value = ctl.value;
        const fields = this.state.fields;
        fields[name] = value;
        this.setState({fields});
    }

    renderPeople(){
            return this.state.people.map(({name,email}, idx) =>{
                    return (<li key={idx}>{name} ({email})</li>)
            }
            );
    }

    render() {        
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                    <form onSubmit={this.onFormSubmit}>
                        <input placeholder="Name" 
                                name="name"
                                value={this.state.fields.name} 
                                onChange={this.onChange}/>
                        <input  placeholder="email" 
                                name="email"
                                value={this.state.fields.email} 
                                onChange={this.onChange}/>
                        <input type="submit" />                        
                    </form>
                    <div>
                        <ul>
                                {this.renderPeople()}
                        </ul>
                    </div>
            </div>
        );
    }
}
export default MultiFields;