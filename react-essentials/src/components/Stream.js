import React from 'react';
import SnapkiteSteamClient from 'snapkite-stream-client';
import StreamTweet from './StreamTweet';
import Header from './Header';

class Stream extends React.Component{

    state = { 
        tweet : null,
    };

    //https://github.com/Snapkite/snapkite-stream-client
    componentDidMount(){

        let options = {
                hostname: 'localhost',
                port: 3000,
                delayInMilliseconds: 1500,
                cacheNumberOfTweets: 20
        };
       
        //SnapkiteStreamClient.initializeStream(callback, options);
        //SnapkiteSteamClient.initialiseStream(this.handleNewTweet);
        SnapkiteSteamClient.initialiseStream(this.handleNewTweet, options);
    }

    componentWillUnmount(){
        SnapkiteSteamClient.destroyStream();
    }

    handleNewTweet = (tweet) =>{
        alert (JSON.stringify(tweet));
        this.setState(
            {
                tweet: tweet,
            }
        )
    }

    render() {
        const {tweet } = this.state;
        const { onAddTweetToCollection } = this.props;
        const headerText = 'Waiting for public photos from Twitter.. ';
        if (tweet){
            return(
                <StreamTweet 
                    tweet={tweet}
                    onAddTweetToCollection = {onAddTweetToCollection}
                />
            )
        }

        return(
            <Header text={headerText} />
        );
    }
}

export default Stream;