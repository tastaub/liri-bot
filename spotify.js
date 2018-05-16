var Spotify = require('node-spotify-api');

var config = require("./key");

var spotify = new Spotify(config.spotify);

var query = process.argv[3];




var spotifyCall = {
  getSong: spotify.search({type: "track", query: query }, function(err, data) {
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

  module.exports = spotifyCall;