// Homework Assignment #1 - Data Types

/*
This is my first homework assignment for the pirple.com course "keeping up with the javascripts".
One of my all time favorite songs is Bohemian Rapsody from Queen. So I gathered a bunch of information on it in this file.
*/

var songtitle = "Bohemian Rapsody"
var artist = "Queen"
var album = "A Night at the Opera"
var songwriter = "Freddie Mercury"
var producer = "Roy Thomas Baker"
var genre = "Progressive Rock"

var releaseDate = {
  day: 31,
  month: 10,
  year: 1975
}

var duration_sec = 355
var duration_min = 5.91666

var most_streamed_song = true
var number_of_downloads = 1600000000
var was_number_one_in_charts = true

var available_on = ["Google Play Music", "iTunes", "Spotify", "Deezer", "Tidal"]

var youtube_link = "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"

// I've chosen the object type for each line of the lyrics, so you could easily show them on the right time.

var lyrics = [{text: "Is this the real life?", start: 0, end: 3},
{text: "Is this just fantasy?", start: 3, end: 6},
{text: "Caught in a landslide", start: 7, end: 10},
{text: "No escape from reality", start: 10, end: 13},
{text: "Open your eyes", start: 13, end: 17},
{text: "Look up to the skies and see", start: 17, end: 25},
{text: "I'm just a poor boy, I need no sympathy", start: 25, end: 30},
{text: "Because I'm easy come, easy go", start: 30, end: 34},
{text: "A little high, little low", start: 35, end: 37},
{text: "Anyway the wind blows, doesn't really matter to me, to me", start: 38, end: 50},
{text: "Mama, just killed a man", start: 55, end: 61},
{text: "Put a gun against his head", start: 61, end: 63},
{text: "Pulled my trigger, now he's dead", start: 64, end: 67},
{text: "Mama, life had just begun", start: 68, end: 74},
{text: "But now I've gone and thrown it all away", start: 75, end: 81},
{text: "Mama, oh oh", start: 82, end: 88},
{text: "Didn't mean to make you cry", start: 88, end: 91},
{text: "If I'm not back again this time tomorrow", start: 91, end: 97},
{text: "Carry on, carry on, as if nothing really matters", start: 97, end: 104},
{text: "Too late, my time has come", start: 114, end: 119},
{text: "Sends shivers down my spine", start: 120, end: 123},
{text: "Body's aching all the time", start: 124, end: 127},
{text: "Goodbye everybody I've got to go", start: 127, end: 133},
{text: "Gotta leave you all behind and face the truth", start: 134, end: 140},
{text: "Mama, oh oh (anyway the wind blows)", start: 141, end: 148},
{text: "I don't want to die", start: 148, end: 151},
{text: "Sometimes wish I'd never been born at all", start: 151, end: 156},
{text: "I see a little silhouetto of a man", start: 185, end: 188},
{text: "Scaramouch, Scaramouch will you do the Fandango", start: 188, end: 191},
{text: "Thunderbolt and lightning very very frightening me", start: 192, end: 195},
{text: "Gallileo, Gallileo, Gallileo, Gallileo, Gallileo, figaro, magnifico", start: 195, end: 202},
{text: "I'm just a poor boy and nobody loves me", start: 202, end: 206},
{text: "He's just a poor boy from a poor family", start: 206, end: 208},
{text: "Spare him his life from this monstrosity", start: 208, end: 211},
{text: "Easy come easy go will you let me go", start: 213, end: 216},
{text: "Bismillah, no we will not let you go, let him go", start: 216, end: 220},
{text: "Bismillah, we will not let you go, let him go", start: 220, end: 223},
{text: "Bismillah, we will not let you go, let me go", start: 224, end: 226},
{text: "(Will not let you go) let me go (never, never let you go) let me go (never let me go)", start: 226, end: 230},
{text: "Oh oh no, no, no, no, no, no, no", start: 230, end: 234},
{text: "Oh mama mia, mama mia, mama mia let me go", start: 234, end: 237},
{text: "Beelzebub has a devil put aside for me for me for me", start: 237, end: 247},
{text: "So you think you can stop me and spit in my eye", start: 254, end: 259},
{text: "So you think you can love me and leave me to die", start: 260, end: 265},
{text: "Oh baby can't do this to me baby", start: 266, end: 272},
{text: "Just gotta get out just gotta get right outta here", start: 273, end: 278},
{text: "Oh oh oh yeah, oh oh yeah", start: 300, end: 303},
{text: "Nothing really matters", start: 311, end: 314},
{text: "Anyone can see", start: 315, end: 318},
{text: "Nothing really matters", start: 318, end: 322},
{text: "Nothing really matters to me", start: 322, end: 330},
{text: "Anyway the wind blows", start: 343, end: 346}]
