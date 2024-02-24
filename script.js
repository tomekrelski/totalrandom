// quotes -----------------------------------------

// Function to get a random quote from the JSON data
function getRandomQuote(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.quotes.length);
    // Get the random quote object
    var randomQuote = data.quotes[randomIndex];
    // Build the HTML for the quote
    var quoteHTML = '<p>"' + randomQuote.quote + '"</p><p class="text-right">- ' + randomQuote.author + '</p>';
    // Return the HTML
    return quoteHTML;
}

function updateModalWithRandomQuote(data) {
    // Get a random quote from the JSON data
    var randomIndex = Math.floor(Math.random() * data.quotes.length);
    var randomQuote = data.quotes[randomIndex];
    // Build the HTML for the quote
    var quoteHTML = '<p>"' + randomQuote.quote + '"</p><p class="text-right">- ' + randomQuote.author + '</p>';
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
$('#tryAgainBtn').click(function () {
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


function updateModalWithRandomCountry(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.length);
    // Get the random country object
    var randomCountry = data[randomIndex];
    // Build the HTML for the country
    var countryHTML = '<h1>Country to Visit:</h1>' +'<h2>'+ randomCountry.en_short_name + '</h2>';
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


function updateModalWithRandomSport(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.sports.length);
    // Get the random country object
    var randomSport = data.sports[randomIndex];
    // Build the HTML for the country
    var sportHTML = '<h1>New Sport to Try:</h1>' + '<h2>' + randomSport + '</h2>';
    // Update the modal content with the random country
    $('#sportContent').html(sportHTML);
}

// When the modal is shown
$('#SportModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/sports.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random country
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
            // Update modal with a new random country
            updateModalWithRandomSport(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});


// Habit --------------------------------

function updateModalWithRandomHabit(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.good_habits.length);
    // Get the random country object
    var randomHabit = data.good_habits[randomIndex];
    // Build the HTML for the country
    var habitHTML = '<h1>New Habit to Try:</h1>' + '<h2>' + randomHabit.habit + '</h2>' + '<p>'+randomHabit.description + '</p>';
    // Update the modal content with the random country
    $('#habitContent').html(habitHTML);
}

// When the modal is shown
$('#HabitModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/habit.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random country
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
            // Update modal with a new random country
            updateModalWithRandomHabit(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});


// Challenge --------------------------------

function updateModalWithRandomChallenge(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.challenges.length);
    // Get the random country object
    var randomChallenge = data.challenges[randomIndex];
    // Build the HTML for the country
    var challengeHTML = '<h1>Challenge to Try:</h1>' + '<h2>' + randomChallenge.challenge + '</h2>' + '<p>' + randomChallenge.skills_required + '</p>' + '<p>' + randomChallenge.area + '</p>';
    // Update the modal content with the random country
    $('#challengeContent').html(challengeHTML);
}

// When the modal is shown
$('#ChallengeModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/challenges.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random country
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
            // Update modal with a new random country
            updateModalWithRandomChallenge(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});


// History --------------------------------

function updateModalWithRandomHistory(data) {
    // Get a random index
    var randomIndex = Math.floor(Math.random() * data.history_facts.length);
    // Get the random country object
    var randomHistory = data.history_facts[randomIndex];
    // Build the HTML for the country
    var historyHTML = '<h1>History Fact:</h1>' + '<h2>' + randomHistory.fact + '</h2>' + '<p>' + randomHistory.era + '</p>';
    // Update the modal content with the random country
    $('#historyContent').html(historyHTML);
}

// When the modal is shown
$('#HistoryModal').on('shown.bs.modal', function () {
    // Fetch the JSON data from the external file
    fetch('json/history.json')
        .then(response => response.json())
        .then(data => {
            // Update modal with a random country
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
            // Update modal with a new random country
            updateModalWithRandomHistory(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

// Total Random

var modalIds = ["#QuoteModal", "#CountryModal", "#SportModal", "#HabitModal", "#ChallengeModal", "#HistoryModal"];

// Function to open a random modal
function openRandomModal() {
    var randomModalId = modalIds[Math.floor(Math.random() * modalIds.length)];
    $(randomModalId).modal('show');
}

// Event listener for "Total Random" image
document.querySelector('img[data-bs-target="#TotalRandomModal"]').addEventListener('click', function () {
    openRandomModal();
});

// Event listener for "Try Again" button inside modal
document.querySelectorAll('.try-again-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        openRandomModal();
    });
});
