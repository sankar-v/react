import React from 'react';
import './App.css';
import Validator from './shared/Validator';


class NewItem extends React.Component{

    constructor(props){
        super(props);
        this.validator = new Validator();
    }

    state = {
        name: '',
        summary: '',
        year: '',
        country: '',
        description: '',
    }

    handleInputChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    onCancel = () => {
        this.props.onCancel();
    }

    onSubmit = () => {
        
        if(this.validator.validateInputs(this.state)){
            alert('inside onSubmit validation')
            this.props.onSubmit(this.state);
        }
    }

    render() {
        return (
          <form >
            <div className="input-panel">
          
          <span className="form-caption">New item:</span>
          <div>
            <label className="field-name">Name:<br/>
              <input 
                value={this.state.name} 
                name="name" 
                maxLength="40" 
                required 
                onChange={this.handleInputChange} 
                placeholder="item name" />
            </label>
          </div>
          <div>
            <label className="field-name">Summary:<br/>
              <input 
                value={this.state.summary} 
                name="summary" 
                maxLength="40" 
                required 
                onChange={this.handleInputChange} 
                placeholder="summary" />
            </label>
          </div>
          <div>
            <label className="field-name">Year:<br/>
              <input 
                value={this.state.year} 
                name="year" 
                maxLength="4" 
                pattern="[0-9]{1,4}" 
                onChange={this.handleInputChange} 
                placeholder="year" />
            </label>
          </div>
          <div>
            <label className="field-name">Country:<br/>
              <input 
                value={this.state.country} 
                name="country" 
                maxLength="2" 
                pattern="[a-z|A-Z]{2}" 
                onChange={this.handleInputChange} 
                placeholder="country code" />
            </label>
          </div>
          <div>
            <label className="field-name">Description:<br/>
              <textarea 
                value={this.state.description} 
                name="description" 
                onChange={this.handleInputChange} 
                placeholder="description" />
            </label>
          </div>
          <br/>
          <button onClick={this.onCancel}>Cancel</button> 
          <button onClick={this.onSubmit}>Create</button>
          </div>
          </form>
        );
      }
}

export default NewItem;