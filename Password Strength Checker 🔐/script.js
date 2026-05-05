
function checkPassword() {
    let pass = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (pass === "") {
        result.style.color = "orange";
        result.innerHTML = "Please enter a password!";
    }
    else if (pass.length < 6) {
        result.style.color = "red";
        result.innerHTML = "Weak password (min 6 characters)";
    }
    else if (pass.length >= 6 && pass.length < 10) {
        result.style.color = "blue";
        result.innerHTML = "Medium strength password";
    }
    else {
        result.style.color = "green";
        result.innerHTML = "Strong password 💪";
    }
}