// 'use strict';



var Twitter = require('twitter');
var twitterCredentials = require('./keys.js');
var keys = twitterCredentials.twitterKeys;
var client = new Twitter(keys);



var spotify = require('spotify');


var requestNPM = require('request');


var fs = require('fs')


var command = process.argv[2];
var request = process.argv[3];


switch (command) {
    case 'my-tweets':
        var params = { screen_name: 'RealAlexJones', count: 20 };
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            for (var i = 0; i < tweets.length; i++) {
                console.log('________________________________________________________________');
                console.log('');
                console.log('Tweeet ' + (i+1) + ': ' + tweets[i].text);
                console.log("Date: " + tweets[i].created_at);
                console.log('');
            }
        })
        break;
    case 'movie-this':
        if (request === undefined) {
            movieTitle = 'Mr. Nobody'
            var queryUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&tomatoes=true&r=json";
            omdbRequest(queryUrl);
        } else {
            
            movieTitle = request.replace(/ /g, '+');
            var queryUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&tomatoes=true&r=json";
            omdbRequest(queryUrl);
        }
        break;
    case 'spotify-this-song':
        if (request === undefined) {
            request = 'I Believe I can Fly'
            spotifyRequest(request)

        } else {
            spotifyRequest(request);
        }
        break;

    case 'do-what-it-says':
        fs.readFile('random.txt', 'utf8', function(error, data) {
            var random = data.split(',')
            request = random[1];
            spotifyRequest(request);
        });
        break
    case 'HELP':
        console.log('Here are my commands:');
        console.log("1. 'my-tweets'");
        console.log("2. 'spotify-this-song' '<Song Name Here>' ");
        console.log("3.  'movie-this' '<Movie Name Here>' ");
        console.log("4. 'do-what-it-says' ");
        break;


    default:
        console.log("Want to learn more about my features? Add 'HELP' to the end of your request");
        break;
}



function spotifyRequest(songSearch) {
    spotify.search({ type: 'track', query: songSearch }, function(err, data) {
        if (!err) {
            console.log('Artist: ' + data.tracks.items[0].album.artists[0].name);
            console.log('Song: ' + data.tracks.items[0].name);
            console.log('Link: ' + data.tracks.items[0].external_urls.spotify);
            console.log('Album: ' + data.tracks.items[0].album.name);
        } else {
            console.log("There was an error!: " + err);
        };
    });

};


function omdbRequest(queryUrl) {
    requestNPM(queryUrl, function(error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Released: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Country of production: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot:  " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("Rotton Tomatoes Rating: " + JSON.parse(body).tomatoURL);
        }
    });
}


if (request !== undefined) {

    fs.appendFile('log.txt', "," + command + ' "' + request + '"', function(err) {
        if (err) {
            console.log("There was an error!: " + err);
        }

    })
    
} else {
    fs.appendFile('log.txt', "," + command, function(err) {
        if (err) {
            console.log("There was an error!: " + err);
        }

    })
}