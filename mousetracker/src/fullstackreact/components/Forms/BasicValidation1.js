import React from 'react';
import Field from './Field';

class BasicValidation1 extends React.Component{

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

    onChange =({name, value, error}) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        fields[name] = value;
        fieldErrors[name] = error;
        this.setState({fields, fieldErrors});
    }

    validate = ( )=>{
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errorMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k])

        if (!person.name) return true;
        if (!person.email) return true;
        if (errorMessages.length) return true;
    
        return false;
    }

    onFormSubmit = (evt) => {
        const people = this.state.people;
        const person = this.state.fields;

        evt.preventDefault();
        if (this.validate() ) return;
        
        this.setState({
            people: people.concat(person),
            fields: {
                name: '',
                email: '',
            },
        });
    };

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
             
                       <Field name="name"
                                placeholder="Name"
                                value ={this.state.fields.name}    
                                onChange={this.onChange} 
                                validate={(val)=> val ? false : 'Name required'}/>
                        <br/>
                        <input  placeholder="Email" 
                                name="email"
                                value={this.state.fields.email} 
                                onChange={this.onChange}
                                validate={(val) => val ? false : 'Invalid Email'}/>
                        <br/>
                        <input type="submit" disabled={this.validate()} />               
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
export default BasicValidation1;