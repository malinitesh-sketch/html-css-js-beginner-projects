function calculateAge() {
    let year = document.getElementById("birthYear").value;
    let result = document.getElementById("result");

    if (year === "") {
        result.style.color = "red";
        result.innerHTML = "Please enter your birth year!";
        return;
    }

    let currentYear = new Date().getFullYear();

    if (year > currentYear) {
        result.style.color = "orange";
        result.innerHTML = "Invalid year! You are not born yet.";
    } 
    else {
        let age = currentYear - year;
        result.style.color = "green";
        result.innerHTML = "Your age is: " + age + " years";
    }
}