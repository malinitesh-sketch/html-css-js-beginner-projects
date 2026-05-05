function convertTemp() {
    let temp = document.getElementById("temp").value;
    let output = document.getElementById("output");

    if (temp === "") {
        output.style.color = "red";
        output.innerHTML = "Please enter a temperature!";
    }
    else {
        temp = Number(temp);

        // If temperature is less than 50 → assume Celsius
        if (temp < 50) {
            let fahrenheit = (temp * 9/5) + 32;
            output.style.color = "blue";
            output.innerHTML = temp + "°C = " + fahrenheit + "°F";
        }
        // Otherwise assume Fahrenheit
        else {
            let celsius = (temp - 32) * 5/9;
            output.style.color = "green";
            output.innerHTML = temp + "°F = " + celsius.toFixed(2) + "°C";
        }
    }
}