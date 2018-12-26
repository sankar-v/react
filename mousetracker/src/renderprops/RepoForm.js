import React from 'react';

//https://codepen.io/rkotze/pen/oqqopQ
class RepoForm extends React.Component {
    constructor(){
      super();
      this.state = {
        repoPath: 'findmypast-oss/git-mob'
      };
    }

    handleChange(event){
        this.setState({
            repoPath: event.target.value
        });
    }

    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>
                <label>Repo: 
                    <input name="repo-path" onChange={this.handleChange} 
                        value={this.state.repoPath} />
                </label>
                <button type="submit">Find</button>
                </p>
            </form>
        );
    }
}

export default RepoForm;