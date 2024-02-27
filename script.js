// quotes -----------------------------------------

// Function to get a random quote from the JSON data
function getRandomQuote(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.quotes.length);
    // Get the random quote object
    var randomQuote = data.quotes[randomIndex];
    // Build the HTML for the quote
    var quoteHTML = '<p>"' + randomQuote.quote + 
                    '"</p><p class="text-right">- ' 
                    + randomQuote.author + '</p>';
    // Return the HTML
    return quoteHTML;
}

function updateModalWithRandomQuote(data) {
    var quoteHTML = getRandomQuote(data);
    // Update the modal content with the random quote
    $('#quoteContent').html(quoteHTML);
}

// When the modal is shown
$('#QuoteModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/quotes.json')
        .then(response => response.json())
        .then(data => {
            // Get a random quote from the JSON data
            var randomQuoteHTML = getRandomQuote(data);
            // Update the modal content with the random quote
            $('#quoteContent').html(randomQuoteHTML);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});


// When "Try Again" button is clicked
$('#tryAgainQuotesBtn').click(function () {
    // Fetch the JSON data from the external file
    fetch('json/quotes.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a new random quote
            updateModalWithRandomQuote(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

// Country --------------------------------


function getRandomCountry(data) {

    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.length);
    // Get the random country object
    var randomCountry = data[randomIndex];
    // Build the HTML for the country
    var countryHTML = '<h1>Country to Visit:</h1>' +
                      '<h2>' + randomCountry.en_short_name + '</h2>';
    // Return the HTML
    return countryHTML;
}


function updateModalWithRandomCountry(data) {

    var countryHTML = getRandomCountry(data);
    // Update the modal content with the random country
    $('#countryContent').html(countryHTML);
}

// When the modal is shown
$('#CountryModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/country.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random country
            updateModalWithRandomCountry(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

// When "Try Again" button is clicked
$('#tryAgainCountryBtn').click(function () {
    // Fetch the JSON data from the external file
    fetch('json/country.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a new random country
            updateModalWithRandomCountry(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});


// Sport --------------------------------

function getRandomSport(data) {

    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.sports.length);
    // Get the random Sport object
    var randomSport = data.sports[randomIndex];
    // Build the HTML for the Sport
    var sportHTML = '<h1>New Sport to Try:</h1>' + 
                    '<h2>' + randomSport + '</h2>';
    // Return the HTML
    return sportHTML;
}


function updateModalWithRandomSport(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.sports.length);
    // Get the random Sport object
    var randomSport = data.sports[randomIndex];
    // Build the HTML for the Sport
    var sportHTML =  getRandomSport(data);
    // Update the modal content with the random Sport
    $('#sportContent').html(sportHTML);
}

// When the modal is shown
$('#SportModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/sports.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random Sport
            updateModalWithRandomSport(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

$('#tryAgainSportBtn').click(function () {
    // Fetch the JSON data from the external file
    fetch('json/sports.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a new random Sport
            updateModalWithRandomSport(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});


// Habit --------------------------------

function getRandomHabit(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.good_habits.length);
    // Get the random habit object
    var randomHabit = data.good_habits[randomIndex];
    // Build the HTML for the Habit
    var habitHTML = '<h1>New Habit to Try:</h1>' + 
                    '<h2>' + randomHabit.habit + '</h2>' 
                    + '<p>' + randomHabit.description + '</p>';
    // Return the HTML
    return habitHTML;
}

function updateModalWithRandomHabit(data) {
  
    var habitHTML = getRandomHabit(data);
    // Update the modal content with the random Habit
    $('#habitContent').html(habitHTML);
}

// When the modal is shown
$('#HabitModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/habit.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random Habit
            updateModalWithRandomHabit(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

$('#tryAgainHabitBtn').click(function () {
    // Fetch the JSON data from the external file
    fetch('json/habit.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a new random Habit
            updateModalWithRandomHabit(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});


// Challenge --------------------------------

function getRandomChallenge(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.challenges.length);
    // Get the random Challenge object
    var randomChallenge = data.challenges[randomIndex];
    // Build the HTML for the Challenge
    var challengeHTML = '<h1>Challenge to Try:</h1>' 
                        + '<h2>' + randomChallenge.challenge 
                        + '</h2>' + '<p>' + randomChallenge.skills_required 
                        + '</p>' + '<p>' + randomChallenge.area + '</p>';
    // Return the HTML
    return challengeHTML;
}



function updateModalWithRandomChallenge(data) {
   
    var challengeHTML = getRandomChallenge(data);
    // Update the modal content with the random Challenge
    $('#challengeContent').html(challengeHTML);
}

// When the modal is shown
$('#ChallengeModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/challenges.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random Challenge
            updateModalWithRandomChallenge(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

$('#tryAgainChallengeBtn').click(function () {
    // Fetch the JSON data from the external file
    fetch('json/challenges.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a new random Challenge
            updateModalWithRandomChallenge(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});


// History --------------------------------

function getRandomHistory(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.history_facts.length);
    // Get the random History object
    var randomHistory = data.history_facts[randomIndex];
    // Build the HTML for the History
    var historyHTML = '<h1>History Fact:</h1>' 
                    + '<h2>' + randomHistory.fact + '</h2>' 
                    + '<p>' + randomHistory.era + '</p>';
    // Update the modal content with the random History
    return historyHTML;
}

function updateModalWithRandomHistory(data) {

    var historyHTML = getRandomHistory(data);
    // Update the modal content with the random history
    $('#historyContent').html(historyHTML);

}

// When the modal is shown
$('#HistoryModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/history.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random History
            updateModalWithRandomHistory(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

$('#tryAgainHistoryBtn').click(function () {
    // Fetch the JSON data from the external file
    fetch('json/history.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a new random History
            updateModalWithRandomHistory(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});


// Joke --------------------------------

function getRandomJoke(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.length);
    // Get the random country object
    var randomJoke = data[randomIndex];
    // Build the HTML for the country
    var jokeHTML = '<h1>Question:</h1>' 
                + '<h2>' + randomJoke.setup + '</h2>' 
                + '<h1>Answer:</h1>' + '<h2>' 
                + randomJoke.punchline + '</h2>';
    // Update the modal content with the random country
    return jokeHTML;
}

function updateModalWithRandomJoke(data) {
    
    var jokeHTML = getRandomJoke(data);
    // Update the modal content with the random joke
    $('#jokeContent').html(jokeHTML);
}

// When the modal is shown
$('#JokeModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/jokes.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random Joke
            updateModalWithRandomJoke(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

$('#tryAgainJokeBtn').click(function () {
    // Fetch the JSON data from the external file
    fetch('json/jokes.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a new random Joke
            updateModalWithRandomJoke(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

// Books --------------------------------

function getRandomBook(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.books.length);
    // Get the random book object
    var randomBook = data.books[randomIndex];
    // Build the HTML for the book
    var bookHTML = '<h1>Book Title:</h1>' 
                    + '<h2>' + randomBook.title + '</h2>' 
                    + '<h1>Type:</h1>' + '<h2>' + randomBook.type + '</h2>' 
                    + '<h1>Summary:</h1>' 
                    + '<h2>' + randomBook.summary + '</h2>';
    // Update the modal content with the random book
    return bookHTML;
}

function updateModalWithRandomBook(data) {

    var bookHTML = getRandomBook(data);
    // Update the modal content with the random Book
    $('#bookContent').html(bookHTML);
}

// When the modal is shown
$('#BookModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/books.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random Book
            updateModalWithRandomBook(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

$('#tryAgainBookBtn').click(function () {
    // Fetch the JSON data from the external file
    fetch('json/books.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a new random Book
            updateModalWithRandomBook(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

// Song --------------------------------

function getRandomSong(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.songs.length);
    // Get the random book object
    var randomSong = data.songs[randomIndex];
    // Build the HTML for the book
    var songHTML = '<h1>Song Title:</h1>' +
        '<h2>' + randomSong.title + '</h2>' +
        '<h1>Artist:</h1>' +
        '<h2>' + randomSong.artist + '</h2>' +
        '<h1>Genre:</h1>' +
        '<h2>' + randomSong.genre + '</h2>' +
        '<a href="' + randomSong.youtube_link + '" target="_blank">Watch and lisen on YouTube</a>';
    // Update the modal content with the random Song
    return songHTML;
}

function updateModalWithRandomSong(data) {

    var songHTML = getRandomSong(data);
    // Update the modal content with the random Book
    $('#songContent').html(songHTML);
}

// When the modal is shown
$('#SongModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/songs.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random Book
            updateModalWithRandomSong(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

$('#tryAgainSongBtn').click(function () {
    // Fetch the JSON data from the external file
    fetch('json/songs.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a new random Book
            updateModalWithRandomSong(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});


// Total Random -----------------------------------------


// Function to update modal with random data from a specific category
function updateModalWithRandomData(category) {
    // Fetch the JSON data based on the category
    fetch(`json/${category}.json`)
        .then(response => response.json())
        .then(data => {
            var randomData;
            switch (category) {
                case 'quotes':
                    randomData = getRandomQuote(data);
                    break;
                case 'country':
                    randomData = getRandomCountry(data);
                    break;
                case 'sports':
                    randomData = getRandomSport(data);
                    break;
                case 'habit':
                    randomData = getRandomHabit(data);
                    break;
                case 'challenges':
                    randomData = getRandomChallenge(data);
                    break;
                case 'history':
                    randomData = getRandomHistory(data);
                    break;
                case 'jokes':
                    randomData = getRandomJoke(data);
                    break;
                case 'books':
                    randomData = getRandomBook(data);
                    break;
                case 'songs':
                    randomData = getRandomSong(data);
                    break;
                // // Add cases for other categories if needed
                // default:
                //     randomData = getRandomItem(data);
            }
            // Update the modal content with the random data
            $('#TotalRandomContent').html(randomData);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

// When the Total Random modal is shown
$('#TotalRandomModal').on('shown.bs.modal', function () {
    // Array of categories
    var categories = ['quotes', 'country', 'sports','habit','challenges','history','jokes','books','songs']; // Add more categories if needed
    // Get a random category
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];
    // Update the modal with random data from the random category
    updateModalWithRandomData(randomCategory);
});

// When "Try Again" button is clicked
$('#tryAgainTotalRandomBtn').click(function () {
    // Trigger the modal shown event again to update with new random data
    var categories = ['quotes', 'country', 'sports', 'habit', 'challenges', 'history', 'jokes','books','songs']; // Add more categories if needed
    // Get a random category
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];
    // Update the modal with random data from the random category
    updateModalWithRandomData(randomCategory);
});



