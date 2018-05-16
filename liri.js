    
var keys = require('dotenv').config();
    
    

 var getCall = function() {
    var enter = process.argv[2];

    if(enter === "my-tweets")  {
        var Twitter = require('./twitter.js');
    } else  if(enter === "spotify-this-song")  {
        var Spotify = require('./spotify.js');
    }  else if(enter === "movie-this")  {
        var Movie = require('./movies.js')
    }
 }
 getCall();



