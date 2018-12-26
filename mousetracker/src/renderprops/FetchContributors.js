import React from 'react';

//https://www.richardkotze.com/coding/understanding-render-props-react-js
class FetchContributors extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contributorList : [],
        }
    }

    fetchContributors = (repoPath) => {
            fetch(`https://api.github.com/repos/${repoPath}/stats/contributors`)
            .then((data)=> data.json())
            .then((data) => data.map(({total, author})=>
                ({
                    total:total,
                    username: author.login,
                    avatar: author.avatar_url,
                    id: author.id
                })))
            .then((contributorList)=>{
                this.setState({contributorList});
            });
    }

    componentDidMount(){
        this.fetchContributors(this.props.repoPath);
    }

    componentDidUpdate(prevProps){
        if(prevProps.repoPath !== this.props.repoPath)
            this.fetchContributors(this.props.repoPath);
    }

    render(){
        const { contributorList } = this.state;
        return(
                <div>
                    {this.props.children(contributorList)}
                </div> 
        )
    }
}

export default FetchContributors;