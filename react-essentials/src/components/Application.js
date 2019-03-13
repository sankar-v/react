import React from 'react';
import Stream from './Stream';
import Collection from './Collection';


class Application extends React.Component{
    state = {
        collectionTweets : {},
    }

    addTweetToCollection = (tweet) => {
        let collectionTweets = this.state;
        collectionTweets[tweet.id] = tweet;
        this.setState({
            collectionTweets: collectionTweets
        });
    }

    removeTweetFromCollection = (tweet) =>{
        var collectionTweets = this.state;
        delete collectionTweets[tweet.id];
        this.setState( { collectionTweets:collectionTweets } );
    }

    removeAllTweetsFromCollection = () => {
        this.setState({
            collectionTweets : {}
        });
    }

    render(){
        const {
            addTweetToCollection,
            removeTweetFromCollection,
            removeAllTweetsFromCollection
        } = this;

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Stream onAddTweetToCollection = {addTweetToCollection} />
                    </div>
                    <div className="col-md-8">
                        <Collection
                            tweets={this.state.collectionTweets}
                            onRemoveTweetFromCollection={removeTweetFromCollection}
                            onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Application;