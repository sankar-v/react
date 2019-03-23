import React from 'react';

class BasicValidation extends React.Component{

    state = {
        people: [],
        fields : {
            name:'',
            email: ''
        },
        fieldErrors : {
            name:'',
            email:'',
        }  
    };

    onFormSubmit =(e)=>{
        const people = [...this.state.people];
        const person = this.state.fields;
        const fieldErrors = this.validateFields(person);
        this.setState({fieldErrors});
        e.preventDefault();

        if (Object.keys(fieldErrors).length) 
            return;
        
        this.setState({
            people:people.concat(person),
            fields:{
                name: '',
                email: ''
            }
        });
        e.preventDefault();
     }

    onChange =(e) => {
        const ctl = e.target;
        const name = ctl.name;
        const value = ctl.value;
        const fields = this.state.fields;
        fields[name] = value;
        this.setState({fields});
    }

    validateFields =(person)=>{
        const errors = {};
        if (!person.name) errors.name = 'Name required';
        if (!person.email) errors.email = 'Email required';
        //if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
        if (person.email ) errors.email = 'Invalid Email';
        return errors;
    }

    renderPeople(){
        return this.state.people.map(({name,email}, idx) =>{
                return (<li key={idx}>{name} ({email})</li>)
            }
        );
    }
    render(){
        return(
            <div>
                <h1>Sign Up Sheet</h1>
                    <form onSubmit={this.onFormSubmit}>
                        <input placeholder="Name" 
                                name="name"
                                value={this.state.fields.name} 
                                onChange={this.onChange}/>
                        <span style={{color: 'red'}}>{this.state.fieldErrors.name}</span>
                        <br/>
                        <input  placeholder="email" 
                                name="email"
                                value={this.state.fields.email} 
                                onChange={this.onChange}/>
                        <span style={{color: 'red'}}>{this.state.fieldErrors.email}</span>
                        <br/>
                        <input type="submit" />               
                    </form>
                    <div>
                        <ul>
                                {this.renderPeople()}
                        </ul>
                    </div>
            </div>
        )
    }

}
export default BasicValidation;