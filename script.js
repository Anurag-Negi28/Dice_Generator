let images = [
    "dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg"
];
let dice = document.querySelectorAll("img");

// Initialize the history array to store roll results
let rollHistory = [];

// Function to update the history log on the webpage
function updateHistoryLog() {
    // Limit history array to the most recent 4 entries
    if (rollHistory.length > 3) {
        rollHistory = rollHistory.slice(rollHistory.length - 3);
    }

    const historyList = document.getElementById("history-list");
    historyList.innerHTML = ""; // Clear previous history

    // Loop through rollHistory array and add each result to the history log
    for (let i = 0; i < rollHistory.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Roll ${i + 1}: ${rollHistory[i]}`;
        historyList.appendChild(listItem);
    }
}

// Function to roll the dice and update history
function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);

        // Add the roll result to the history array
        rollHistory.push((dieOneValue + 1) + (dieTwoValue + 1));

        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));

        // Update the history log on the webpage
        updateHistoryLog();
    },
        1000
    );
}

// Call this function to initialize the history log
updateHistoryLog();
