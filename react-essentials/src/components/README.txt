https://github.com/Snapkite/snapkite-stream-client

var SnapkiteStreamClient = require('snapkite-stream-client');
initializeStream() or initialiseStream()
Connects to Snapkite Engine and invokes callback function on receiving new tweet:

SnapkiteStreamClient.initializeStream(callback, options);
Callback function should handle tweet object:

function callback(tweet) {
  // ... handle tweet object
}

options object:
{
  hostname: 'localhost',
  port: 3000,
  delayInMilliseconds: 1500,
  cacheNumberOfTweets: 20
}

hostname
Default: localhost.

port
Default: 3000.

delayInMilliseconds
Tweets can arrive at a very fast pace, so to prevent that you can set the minimum delay between tweets. Delay is set in milliseconds.

Default: 1500
cacheNumberOfTweets
If you set a delay between receiving new tweets, you might want to cache them. Tweets that are not cached will be dropped.
Default: 20

destroyStream()
Disconnect from Snapkite Engine.

SnapkiteStreamClient.destroyStream();

git clone https://github.com/snapkite/snapkite-engine.git
npm install -g node-gyp

filters

git clone https://github.com/snapkite/snapkite-filter-is-possibly-sensitive.git
git clone https://github.com/snapkite/snapkite-filter-has-mobile-photo.git
git clone https://github.com/snapkite/snapkite-filter-is-retweet.git
git clone https://github.com/snapkite/snapkite-filter-has-text.git