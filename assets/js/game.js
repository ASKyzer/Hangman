// global variables//
////////////////////

//letters to choose from and will be displayed//
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// words that will be generated randomly by the computer//
var citiesList = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

//will disply how many times the player guessed the word correctly//
var wins = 0;
//The initial number of tries a player has//
var guessesRemaining = 10;
// this will hold the letters the player guesses and display in DOM
var guessesSoFar = [];
//will be determined later when the document.onkeyup function is called
var userInput = null;
//computer randomly generates a word from list of cities in aboe array
var wordToPlay = citiesList[Math.floor(Math.random() * citiesList.length)];
console.log(wordToPlay);

//getting an array of the word in play
var arrayOfWordToPlay = [];
    arrayOfWordToPlay = wordToPlay.split('');
console.log(arrayOfWordToPlay);

//turning the word in play into underlined letters with spaces between them.
var underscoreArray = [];
for (var i = 0; i < wordToPlay.length; i++) {
  underscoreArray[i] = "_ ";
}
//getting rid of the comma that seperates the array of underscores
var underscoreWord = underscoreArray.join("");
// console.log(underscoreArray);
console.log(underscoreWord);

//sending the underscored word to play to the document
var refreshWord = function(){
  var wordToPlay = document.getElementById('wordToGuess');
    wordToPlay.innerHTML = underscoreWord;
};
////////////////////////////////////////////////
// some things we have to do during the game //
//////////////////////////////////////////////

//update the written score in the DOM
var updateScore = function(){
  document.querySelector("#score").innerHTML = "Wins: " + wins;
};
// update the written guesses remaining in the DOM
var updateGuessesRemaining = function(){
  document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + guessesRemaining;
};


// will refrest the guesses remaing, letters guessed so far array and the word in play but not the score
var reset = function(){
  arrayOfWordTnPlay = [];
  guessesRemaining = 10;
  guessesSoFar = [];
}


/////////////////////////
/// playing the game ///
///////////////////////

document.onkeyup = (function(wordToPlay, arrayOfWordToPlay, underscoreArray, undercoreword){
  //calls funtion that prints the word to guess in DOM
  refreshWord();

  //get the letter that the user presses
  var userInput = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userInput);
  //push the key pressed letter into the guessesSoFar array
  guessesSoFar.push(userInput);
  console.log(guessesSoFar);
  //sends the letter pressed to the DOM as they are pressed
  document.querySelector("#lettersAlreadyUsed").innerHTML = "Letters you've chosen so far: " + guessesSoFar;

  ////compare user input to the answer while the number of guesses remaining is > 0 or until all the letters are guessed///
console.log(wordToPlay);
  for (var i = 0; i < wordToPlay.length ; i++){
    console.log(userInput);
    console.log(arrayOfWordToPlay[i]);
    if (userInput == arrayOfWordToPlay[i]) {
      // console.log("guessed correctly" + arrayOfWordToPlay[i]);
    underscoreArray[i] = arrayOfWordToPlay[i];
    // // console.log("updated"+underscoreArray);

// go through loop of length of word and if the user input matches the index of the word, then print that letter to the DOM.

//if the user input does not match, then geuessesRemaining-- (the number of guesses left goes down)

//another key is pressed by the user and the above cycles again.

//when all the letters in the word is guessed, alert you win and the reset(); updateScore(); and win++ would go here.










    console.log(underscoreArray);
      // userInput[i].push(underscoreArray[i]);
    }
    console.log(arrayOfWordToPlay);
    console.log(underscoreArray);
  }
  // console.log(arraytwo);
  // console.log(arrayOfWordToPlay);
  // console.log(underscoreArray);
  /////////////////////////////////
});
