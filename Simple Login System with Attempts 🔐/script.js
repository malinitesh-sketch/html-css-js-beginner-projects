let attempts = 3;

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let message = document.getElementById("message");
    let attemptsText = document.getElementById("attempts");

    if (attempts === 0) {
        message.style.color = "red";
        message.innerHTML = "Account locked ❌";
        return;
    }

    if (user === "admin" && pass === "1234") {
        message.style.color = "green";
        message.innerHTML = "Login Successful 🎉";
        attemptsText.innerHTML = "";
    } 
    else {
        attempts--;
        message.style.color = "red";
        message.innerHTML = "Wrong username or password!";
        attemptsText.innerHTML = "Attempts left: " + attempts;

        if (attempts === 0) {
            message.innerHTML = "Account locked ❌";
        }
    }
}