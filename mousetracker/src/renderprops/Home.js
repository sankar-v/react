import React from 'react';
import RepoForm from './RepoForm';
import ContributorProfile from './ContributorProfile'; 
import FetchContributors from './FetchContributors';

class Home extends React.Component{
    constructor(){
        super();
        this.state ={
          repoPath: 'findmypast-oss/git-mob'
        };
    }

    handleSubmit = ({ repoPath }) => {
        this.setState({
          repoPath
        });
    }

    render(){
        return(
        <div>
            <h1>
                Contributors to:
            </h1>
            <RepoForm onSubmit= {this.handleSubmit}/>
            <div className="contributors">
            <FetchContributors repoPath={this.state.repoPath}>{
                (contributorList) => contributorList.map((contributor) => {
                    return <ContributorProfile key={contributor.id} {...contributor} />
                })
            }
            </FetchContributors>
        </div>
        </div>
        )
    }
}

export default Home;