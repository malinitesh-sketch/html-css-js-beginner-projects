function checkLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Simple if-else condition
    if (user === "admin" && pass === "1234") {
        message.style.color = "green";
        message.innerHTML = "Login Successful!";
    } else if (user === "" || pass === "") {
        message.style.color = "orange";
        message.innerHTML = "Please fill all fields!";
    } else {
        message.style.color = "red";
        message.innerHTML = "Invalid Username or Password!";
    }
}