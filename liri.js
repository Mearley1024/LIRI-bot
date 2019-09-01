

require("dotenv").config();



var keys = require("./keys.js");


var spotify = new Spotify(keys.spotify);

//concert-this
//spotify-this-song
//movie-this
//do-what-it-says



//node liri.js concert-this <artist/band name here>
//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

//Name of the venue
//Venue location
//Date of the Event (use moment to format this as "MM/DD/YYYY")

//node liri.js spotify-this-song '<song name here>'
//Artist(s)
//The song's name
//A preview link of the song from Spotify
//The album that the song is from

// default to 
//"The Sign" by Ace of Base