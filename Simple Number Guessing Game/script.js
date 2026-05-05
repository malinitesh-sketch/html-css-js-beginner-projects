// Generate random number (1 to 10)
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    let result = document.getElementById("result");

    if (userGuess == "") {
        result.style.color = "orange";
        result.innerHTML = "Please enter a number!";
    }
    else if (userGuess == randomNumber) {
        result.style.color = "green";
        result.innerHTML = "Correct! You guessed it!";
    }
    else if (userGuess > randomNumber) {
        result.style.color = "blue";
        result.innerHTML = "Too high! Try again.";
    }
    else {
        result.style.color = "red";
        result.innerHTML = "Too low! Try again.";
    }
}