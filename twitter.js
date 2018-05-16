var Twitter = require('twitter');
var config = require('./key');
var T = new Twitter(config.twitter);



var TwitterCall = {
    
    getTweet: T.get('statuses/user_timeline', {screen_name: "@trubacon", count: 14}, function(error, tweets, response) {
        

        for(var i = 0; i < tweets.length; i++)  {
            var tweet = tweets[i].text;
            var user = tweets[i].user.name;
            var time = tweets[i].created_at;

            console.log(tweet);
            console.log(user);
            console.log(time);
            console.log("=========================");
        }

    })
}

module.exports = TwitterCall;

