// Global --------------------------------------------------

var alternativeWords = [
    "Retry",
    "Refresh",
    "Another Go",
    "New Attempt",
    "Give it Another Shot",
    "Take Another Chance",
    "Start Over",
    "Click Here",
    "Give it a Whirl",
    "One More Try"
];

function capitalize(word) {
    if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
        return '';
    }
}

function updateButtonTextWithRandomWord(element, wordsArray) {
    var randomIndex = Math.floor(Math.random() * wordsArray.length);
    var randomWord = wordsArray[randomIndex];
    // Update the button text with the random word
    $(element).text(randomWord);
}

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
    var categories = ['quotes', 'country', 'sports', 'habit', 'challenges', 'history', 'jokes', 'books', 'songs']; // Add more categories if needed
    // Get a random category
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];
    // Update the modal with random data from the random category
    $('#TotalRandomModalLabel').text('Total Random ' + capitalize(randomCategory));
    updateModalWithRandomData(randomCategory);
});

// When "Try Again" button is clicked
$('#tryAgainTotalRandomBtn').click(function () {
    // Trigger the modal shown event again to update with new random data
    var categories = ['quotes', 'country', 'sports', 'habit', 'challenges', 'history', 'jokes', 'books', 'songs']; // Add more categories if needed
    // Get a random category
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];
    // Update the modal with random data from the random category
    updateModalWithRandomData(randomCategory);
    updateButtonTextWithRandomWord(this, alternativeWords);
    $('#TotalRandomModalLabel').text('Total Random ' + capitalize(randomCategory));

});





// quotes -----------------------------------------

// Function to get a random quote from the JSON data
function getRandomQuote(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.quotes.length);
    // Get the random quote object
    var randomQuote = data.quotes[randomIndex];
    // Build the HTML for the quote
    var quoteHTML = '<div class="quote-container">' +
        '<div class="quote">' +
        '<p class="quote-text">' + randomQuote.quote + '</p>' +
        '<p class="quote-author">- ' + randomQuote.author + '</p>' +
        '</div>' +
        '</div>';
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
    updateButtonTextWithRandomWord(this, alternativeWords);

});

// Country --------------------------------


function getRandomCountry(data) {

    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.length);
    // Get the random country object
    var randomCountry = data[randomIndex];
    // Build the HTML for the country
    var countryHTML = '<div class="country-container">' +
        '<h1 class="country-title">Country to Visit:</h1>' +
        '<h2 class="country-name">' + randomCountry.en_short_name + '</h2>' +
        '</div>';
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
        updateButtonTextWithRandomWord(this, alternativeWords);
    updateButtonTextWithRandomWord(this, alternativeWords);

});


// Sport --------------------------------

function getRandomSport(data) {

    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.sports.length);
    // Get the random Sport object
    var randomSport = data.sports[randomIndex];
    // Build the HTML for the Sport
    var sportHTML = '<div class="sport-container">' +
        '<h1 class="sport-title">New Sport to Try:</h1>' +
        '<h2 class="sport-name">' + randomSport + '</h2>' +
        '</div>';
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
    updateButtonTextWithRandomWord(this, alternativeWords);

});


// Habit --------------------------------

function getRandomHabit(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.good_habits.length);
    // Get the random habit object
    var randomHabit = data.good_habits[randomIndex];
    // Build the HTML for the Habit
    var habitHTML = '<div class="habit-container">' +
        '<h1 class="habit-title">New Habit to Try:</h1>' +
        '<h2 class="habit-name">' + randomHabit.habit + '</h2>' +
        '<p class="habit-description">' + randomHabit.description + '</p>' +
        '</div>';
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
    updateButtonTextWithRandomWord(this, alternativeWords);

});


// Challenge --------------------------------

function getRandomChallenge(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.challenges.length);
    // Get the random Challenge object
    var randomChallenge = data.challenges[randomIndex];
    // Build the HTML for the Challenge
    var challengeHTML = '<div class="challenge-container">' +
        '<h1 class="challenge-title">Challenge to Try:</h1>' +
        '<h2 class="challenge-name">' + randomChallenge.challenge + '</h2>' +
        '<p class="skills-required">' + randomChallenge.skills_required + '</p>' +
        '<p class="challenge-area">' + randomChallenge.area + '</p>' +
        '</div>';
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
    updateButtonTextWithRandomWord(this, alternativeWords);

});


// History --------------------------------

function getRandomHistory(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.history_facts.length);
    // Get the random History object
    var randomHistory = data.history_facts[randomIndex];
    // Build the HTML for the History
    var historyHTML = '<div class="history-container">' +
        '<h1 class="history-title">History Fact:</h1>' +
        '<h2 class="history-fact">' + randomHistory.fact + '</h2>' +
        '<p class="history-era">' + randomHistory.era + '</p>' +
        '</div>';
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
    updateButtonTextWithRandomWord(this, alternativeWords);

});


// Joke --------------------------------

function getRandomJoke(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.length);
    // Get the random country object
    var randomJoke = data[randomIndex];
    // Build the HTML for the country
    var jokeHTML = '<div class="joke-container">' +
        '<div class="joke-setup">' +
        '<h1 class="joke-title">Question:</h1>' +
        '<p class="joke-text">' + randomJoke.setup + '</p>' +
        '</div>' +
        '<div class="joke-punchline">' +
        '<h1 class="joke-title">Answer:</h1>' +
        '<p class="joke-text">' + randomJoke.punchline + '</p>' +
        '</div>' +
        '</div>';
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
    updateButtonTextWithRandomWord(this, alternativeWords);

});

// Books --------------------------------

function getRandomBook(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.books.length);
    // Get the random book object
    var randomBook = data.books[randomIndex];
    // Build the HTML for the book
    var bookHTML = '<div class="book-container">' +
        '<div class="book-title">' +
        '<h1>Title:</h1>' +
        '<p>' + randomBook.title + '</p>' +
        '</div>' +
        '<div class="book-info">' +
        '<h1>Type:</h1>' +
        '<p>' + randomBook.type + '</p>' +
        '</div>' +
        '<div class="book-summary">' +
        '<h1>Summary:</h1>' +
        '<p>' + randomBook.summary + '</p>' +
        '</div>' +
        '</div>';

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
    updateButtonTextWithRandomWord(this, alternativeWords);

});

// Song --------------------------------

function getRandomSong(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.songs.length);
    // Get the random book object
    var randomSong = data.songs[randomIndex];
    // Build the HTML for the book
    var songHTML = '<div class="song-container">' +
        '<div class="song-details">' +
        '<h1>Title:</h1>' +
        '<p>' + randomSong.title + '</p>' +
        '<h1>Artist:</h1>' +
        '<p>' + randomSong.artist + '</p>' +
        '<h1>Genre:</h1>' +
        '<p>' + randomSong.genre + '</p>' +
        '</div>' +
        '<div class="song-link">' +
        '<a href="' + randomSong.youtube_link + '" target="_blank">Watch and listen on YouTube</a>' +
        '</div>' +
        '</div>';
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
    updateButtonTextWithRandomWord(this, alternativeWords);

});


