

require("dotenv").config();
var Spotify = require('node-spotify-api');
 var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var liriReturn = process.argv[2];
var retrieve = process.argv[3];
//concert-this
//spotify-this-song
//movie-this
//do-what-it-says

var movieThis = function(){
 
axios.get("http://www.omdbapi.com/?t="+ retrieve + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    
    console.log("The movie title is" + response.data.Title);
    console.log("The movie year is" + response.data.Year);
    console.log("The movie Rating is" + response.data.Rated);
    console.log("The movie country is" + response.data.Country);
    console.log("The movie language is" + response.data.Language);
    console.log("The movie plot is" + response.data.Plot);
    console.log("The movie actors are" + response.data.Actors);
   
 })

 .catch(function(error) {
    if (error.response) {
      
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      
      console.log(error.request);
    } else {
      
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
}

var concertThis = function(){
 
  axios.get("https://rest.bandsintown.com/artists/" + retrieve + "/events?app_id=codingbootcamp").then(function(response) {      
      console.log(response.data[0].venue.name);
      console.log(response.data[0].venue.city);
      console.log(response.data[0].datetime);
  });
}

switch(liriReturn) {
  case "movie-this":
  movieThis();
  break;
  case "concert-this":
  concertThis();
  break;
  }
  
 var spotifySong = function(){
   
 }
//spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  //if (err) {
  //  return console.log('Error occurred: ' + err);
  //}
 
//console.log(data); 
//});


//node liri.js spotify-this-song '<song name here>'
//Artist(s)
//The song's name
//A preview link of the song from Spotify
//The album that the song is from

// default to 
//"The Sign" by Ace of Base

//`node liri.js movie-this '<movie name here>'`

// Title of the movie.
      // * Year the movie came out.
      // * IMDB Rating of the movie.
      // * Rotten Tomatoes Rating of the movie.
      // * Country where the movie was produced.
      // * Language of the movie.
      // * Plot of the movie.
       //* Actors in the movie.

 //default to Mr.Nobody
