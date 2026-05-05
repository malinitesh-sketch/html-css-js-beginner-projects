function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = timeString;

    // Greeting using if-else
    let greetingText;

    if (hours < 12) {
        greetingText = "Good Morning 🌅";
    } 
    else if (hours < 18) {
        greetingText = "Good Afternoon ☀️";
    } 
    else {
        greetingText = "Good Evening 🌙";
    }

    document.getElementById("greeting").innerHTML = greetingText;
}

// Update every second
setInterval(updateClock, 1000);