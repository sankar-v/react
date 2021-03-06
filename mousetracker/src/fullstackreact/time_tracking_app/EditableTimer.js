import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends React.Component{
    state = {
        editFormOpen: false,
    };
    
    handleEditClick =(timer) => {
        alert(JSON.stringify(timer));
        this.openForm();
    }

    handleFormClose = () => {
        this.closeForm();
    }

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    }

    openForm = () => {
        this.setState({editFormOpen : true});
    }

    closeForm = () => {
        this.setState({editFormOpen: false});
    }


    render(){
        if (this.state.editFormOpen){
            return(
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            )
        }else{
            return(
                <Timer
                    id ={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onEditClick = {this.handleEditClick}
                    onTrashClick= {this.props.onTrashClick}
                    onStopClick={this.props.onStopClick}
                    onStartClick={this.props.onStartClick}
                />
            );
        }
    }
}

export default EditableTimer;