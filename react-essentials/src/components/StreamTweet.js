import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Tweet from './Tweet';

class StreamTweet extends React.Component{

    state = {
        numberOfCharactersIsIncreasing: null,
        headerText: null
    }

    componentWillMount(){
        console.log('[Snapterest] StreamTweet 1. Running componentWillMount()');
        this.setState(
            {
                numberOfCharactersIsIncreasing: true,
                headerText: 'Latest public photo from twitter'
            }
        );
        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    }

    componentDidMount(){
        console.log('[Snapterest] StreamTweet 2. Running componentDidMount()');
        const componentDOMRepresentation = ReactDOM.findDOMNode(this);
        window.snapterest.headerHtml = 
            componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml = 
            componentDOMRepresentation.children[1].outerHTML;
    }

    componentWillReceiveProps(nextProps){
        console.log('[Snapterest] StreamTweet 4. Running componentWillReceiveProps()');
        const { tweet : currentTweet } = this.props;
        const { tweet: nextTweet } = nextProps;
        const currentTweetLength = currentTweet.text.length;
        const nextTweetLength = nextTweet.text.length;

        const isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
        let headerText;
        this.setState({
            numberOfCharactersIsIncreasing : isNumberOfCharactersIncreasing,
        });

        if (isNumberOfCharactersIncreasing ){
            headerText = 'Number of Characters is increasing'
        }else{
            headerText = 'Latest public photo from Twitter'
        }
        this.setState({
            headerText:headerText
        })
        window.snapterest.numberOfReceivedTweets++;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Snapterest] StreamTweet 5: running shouldComponentUpdate()');
        return(nextProps.tweet.text.length > 1);
    }
   
    componentWillUpdate(nextProps, nextState){
        console.log('[Snapterest] StreamTweet 6: running componentWillUpdate()');
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('[Snapterest] StreamTweet 7: running componentDidUpdate()');
        window.snapterest.numberOfDisplayedTweets++;
    }

    componentWillUnmount(){
        console.log('[Snapterest] StreamTweet 8. Running componentUnmount()');
        delete window.snapterest;
    }
    
    render(){
        console.log('[Snapterest] StreamTweet: running render()');
        const headerText = this.state;
        const { tweet, onAddTweetToCollection } = this.props;

        return(
            <section>
                <Header text={headerText}/>
                <Tweet 
                    tweet = {tweet}
                    onImageClick = {onAddTweetToCollection}
                />
            </section>
        );
    }
}

export default StreamTweet;