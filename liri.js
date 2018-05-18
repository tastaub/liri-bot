    
var keys = require('dotenv').config();

var config = require("./key");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(config.spotify);

var Twitter = require('twitter');
var T = new Twitter(config.twitter);

var request = require("request");

var query = process.argv[3];    


//Twitter
var TwitterCall = function(){
    
    T.get('statuses/user_timeline', {screen_name: "@trubacon", count: 20}, function(error, tweets, response) {
        

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

//Spotify
var spotifyCall = function(){
  
    if(query === undefined)  {
        spotify.search({type: "track", query: "No Scrubs" }, function(err, data) {
        
            if (err) {
              return console.log('Error occurred: ' + err);
            } 
          var response = data.tracks.items[0]
        //   var artist = album.response.artist.name
        //   var album = album.response.name
      
        
      
          var artist = response.artists[0].name;
          var album = response.album.name;
          var sample = response.external_urls.spotify;
          var song = response.name;
      
          console.log('=============================')
          console.log('=============================')
          console.log(artist);
          console.log(song);
          console.log(sample);
          console.log(album);
          console.log('=============================')
          console.log('=============================')
      
      
      
          
      
          })
    } else  {
        spotify.search({type: "track", query: query }, function(err, data) {
        
            if (err) {
              return console.log('Error occurred: ' + err);
            } 
          var response = data.tracks.items[0]
        //   var artist = album.response.artist.name
        //   var album = album.response.name
      
        
      
          var artist = response.artists[0].name;
          var album = response.album.name;
          var sample = response.external_urls.spotify;
          var song = response.name;
      
          console.log('=============================')
          console.log('=============================')
          console.log(artist);
          console.log(song);
          console.log(sample);
          console.log(album);
          console.log('=============================')
          console.log('=============================')
      
      
      
          
      
          })
    }
    
    }


    var movieCall = function(){
        
        if(query === undefined)  {
            request("http://www.omdbapi.com/?apikey=trilogy&plot=short&t=" + "Mr Nobody", function(error, response, body)  {
    
            var results = JSON.parse(body);
            var title = results.Title;
            var year = results.Year;
            
            var srcImdb = results.Ratings[0].Source;
            var rateImdb = results.Ratings[0].Value;
            var imdb = (srcImdb + " " + rateImdb);
    
            var srcRt = results.Ratings[1].Source;
            var rateRt = results.Ratings[1].Value;
            var rt = (srcRt + " " + rateRt);
    
            var country = results.Country;
            var lang = results.Language;
            var plot = results.Plot;
            var actors = results.Actors;
    
            console.log("========================================")
            console.log("========================================")
            console.log(title);
            console.log(year);
            console.log(imdb);
            console.log(rt);
            console.log(country);
            console.log(lang);
            console.log(plot);
            console.log(actors);
            console.log("========================================")
            console.log("========================================")
            
        })
        } else  {
            request("http://www.omdbapi.com/?apikey=trilogy&plot=short&t=" + query, function(error, response, body)  {
    
            var results = JSON.parse(body);
            var title = results.Title;
            var year = results.Year;
            
            var srcImdb = results.Ratings[0].Source;
            var rateImdb = results.Ratings[0].Value;
            var imdb = (srcImdb + " " + rateImdb);
    
            var srcRt = results.Ratings[1].Source;
            var rateRt = results.Ratings[1].Value;
            var rt = (srcRt + " " + rateRt);
    
            var country = results.Country;
            var lang = results.Language;
            var plot = results.Plot;
            var actors = results.Actors;
    
            console.log("========================================")
            console.log("========================================")
            console.log(title);
            console.log(year);
            console.log(imdb);
            console.log(rt);
            console.log(country);
            console.log(lang);
            console.log(plot);
            console.log(actors);
            console.log("========================================")
            console.log("========================================")
            
        })
        }
            
    }

 var getCall = function() {
    var enter = process.argv[2];

    if(enter === "my-tweets")  {
        TwitterCall();
    } else  if(enter === "spotify-this-song")  {
        spotifyCall();  
    }  else if(enter === "movie-this")  {
        movieCall();
    }
 }
 getCall();



