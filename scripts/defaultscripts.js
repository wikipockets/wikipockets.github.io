// Function to display the date and time
function displayDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric' 
    };
    const dateString = now.toLocaleString('en-US', options);
    document.getElementById('date-time').innerText = `Today is ${dateString}`;
}

// Function to handle name and mood submission
function submitNameAndMood() {
    const name = document.getElementById('user-name').value;
    const mood = document.getElementById('user-mood').value;

    if (name && mood) {
        document.getElementById('greeting-message').innerText = `The Jumpy Spider welcomes you, ${name}! We're glad you are doing ${mood}!`;
    } else {
        alert("Please fill in both your name and mood!");
    }
}

// Function to handle favorite number and polygon
function submitFavoriteNumber() {
    const favoriteNumber = Math.abs(Math.round(Number(document.getElementById('favorite-number').value)));

    const polygonNames = [
        "null", "monogon", "digon", "triangle", "quadrilateral", "pentagon", 
        "hexagon", "heptagon", "octagon", "nonagon", "decagon", 
        "hendecagon", "dodecagon", "tridecagon", "tetradecagon", "pentadecagon",
        "hexadecagon", "heptadecagon", "octadecagon", "enneadecagon", "icosagon"
    ];

    let polygonName;
    if (favoriteNumber >= 0 && favoriteNumber < polygonNames.length) {
        polygonName = polygonNames[favoriteNumber];
    } else if (favoriteNumber >= polygonNames.length) {
        polygonName = `a polygon with ${favoriteNumber} sides`;
    } else {
        polygonName = "an invalid polygon";
    }

    alert(`Your favorite number corresponds to ${polygonName}.`);
}

// Spider-Themed Functions
function spinWebOfFacts() {
    alert("Did you know some spiders can create webs strong enough to catch small birds?");
}

function weaveCompliment() {
    alert("You're as unique as a spider's web design—each one is a masterpiece!");
}

function suggestTangledActivity() {
    alert("Why not try your hand at macramé? It's like spinning your own web!");
}

function catchKnowledge() {
    alert("Spiders have tiny claws at the end of their legs to handle their silk threads. Pretty neat, right?");
}

function crawlFunInsight() {
    alert("Fun fact: Some spiders can 'balloon' to travel long distances by releasing silk threads to catch the wind!");
}

// Event listeners added after function declarations
document.addEventListener("DOMContentLoaded", () => {
    displayDateTime();

    // Event listeners for form submission
    document.getElementById('submit-name-button').addEventListener('click', submitNameAndMood);
    document.getElementById('submit-polygon-button').addEventListener('click', submitFavoriteNumber);

    // Event listeners for spider-themed buttons
    document.getElementById('spin-web-button').addEventListener('click', spinWebOfFacts);
    document.getElementById('weave-compliment-button').addEventListener('click', weaveCompliment);
    document.getElementById('tangled-activity-button').addEventListener('click', suggestTangledActivity);
    document.getElementById('catch-knowledge-button').addEventListener('click', catchKnowledge);
    document.getElementById('crawl-fun-button').addEventListener('click', crawlFunInsight);
});
