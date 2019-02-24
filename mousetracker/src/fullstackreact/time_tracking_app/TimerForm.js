import React from 'react';

class TimerForm extends React.Component{
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    };

    handleTitleChange = (e) =>{
        let title = e.target.value;
        this.setState({title:title});
    }

    handleProjectChange = (e) => {
        let project = e.target.value;
        this.setState({project: project}); 
    }

    handleSubmit =(event) => {
        alert(event.target.value);
        let obj = {
            id: this.props.id, 
            title:this.state.title, 
            project:this.state.project};
        this.props.onFormSubmit(obj);
    }

    handleCancel = () => {
        this.props.onFormClose();
    }

    render(){
        const submitText = this.props.id ? 'Update' : 'Create';
        return(
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input 
                                type='text' 
                                value={this.state.title} 
                                onChange={this.handleTitleChange}/>
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input 
                                type='text' 
                                value={this.state.project}
                                onChange={this.handleProjectChange} />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button 
                                className = 'ui basic blue button'
                                onClick={this.handleSubmit}
                                value={submitText}>
                                {submitText}
                            </button>
                            <button 
                                className = 'ui basic red button'
                                onClick={this.handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerForm;