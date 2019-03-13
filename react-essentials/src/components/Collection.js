import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';

import CollectionControls from './CollectionControls';
import TweetList from './TweetList';
import Header from './Header';

class Collection extends Component{
    
    createHtmlMarkupStringOfTweetList = () => {
        const {tweets} = this.props.tweets;
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets = { tweets } />
        );
    
        const htmlMarkup = {
            html: htmlString
        };
    
        return JSON.stringify(htmlMarkup);
    }

    getListOfTweetIds = () => {
        return Object.keys(this.props.tweets);
    }

    getNumberOfTweetsInCollection = () => {
        return this.getListOfTweetIds().length;
    }

    render(){
        
        const numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();
        if (numberOfTweetsInCollection > 0) {
            const {
            tweets,
            onRemoveAllTweetsFromCollection,
            onRemoveTweetFromCollection
        } = this.props;

        const htmlMarkup = this.createHtmlMarkupStringOfTweetList();
        return(
            <div>
                <CollectionControls 
                    numberOfTweetsInCollection = {numberOfTweetsInCollection}
                    htmlMarkup = {htmlMarkup}
                    onRemoveAllTweetsFromCollection = {onRemoveAllTweetsFromCollection}
                />
                <TweetList 
                    tweets={tweets}
                    onRemoveTweetFromCollection={onRemoveTweetFromCollection}
                />                    
            </div>
        );
    }
        return <Header text="Your collection is empty" />
    }
}

export default Collection;