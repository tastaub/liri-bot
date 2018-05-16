var request = require("request");

var movie = process.argv[3];

var movieCall = {
    getMovie: request("http://www.omdbapi.com/?apikey=trilogy&plot=short&t=" + movie, function(error, response, body)  {

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

module.exports = movieCall;