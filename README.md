# LIRI Bot

## IMPORTANT!
**Due to recent privacy changes in the OMDB and Spotify APIs, a number of LIRI's core functions are disabled at the moment.**
The OMDB API is no longer able to be used due to the fact that one must now have a paid API key to access the library (https://www.patreon.com/posts/api-is-going-10743518). 
The Spotify API was recently updated to require authentication for the use of all of its features (https://developer.spotify.com/news-stories/2017/01/27/removing-unauthenticated-calls-to-the-web-api/).

For now, these API changes mean that all of LIRI's functions dependent on the OMDB and Spotify APIs no longer work. **However, the code in this repo was fully functional when the APIs in question were available to the general public.**

## What is LIRI?

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data.

## How does it work?

LIRI has 5 commands:
* my-tweets
	* This will show the last 20 tweets of a twitter account specified in the code (currently the account is "linus__torvalds") and the time when they were created in your terminal/bash window.
* spotify-this-song 'song name here'
	* This will show the following information about the song in your terminal/bash window:
		 * Artist(s)
		 * The song's name
		 * A preview link of the song from Spotify
		 * The album that the song is from
	* If no song is provided then the program will default to "The Sign" by Ace of Base.
* movie-this 'movie name here'
	* This will output the following information to your terminal/bash window:
	   * Title of the movie.
	   * Year the movie came out.
	   * IMDB Rating of the movie.
	   * Country where the movie was produced.
	   * Language of the movie.
	   * Plot of the movie.
	   * Actors in the movie.
	   * Rotten Tomatoes URL.
	* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
* do-what-it-says
	* Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
	* It will run whatever command is written in the "random.txt" file.
* HELP
	* Lists all of LIRI's commands. 

The user types "node liri.js" into the terminal/git bash followed by their command of choice to make LIRI execute the command. 

## Technologies Used
* Javascript
* APIs
* Node.js/npm packages

## Future Plans for Improvement
* Find a new free API of movies other than OMDB, since OMDB is no longer free to use.
* Follow the instructions at https://developer.spotify.com/migration-guide-for-unauthenticated-web-api-calls/ and https://developer.spotify.com/web-api/tutorial/ to see if I can set up the oAuth access token that is now necessary for the Spotify API. 

