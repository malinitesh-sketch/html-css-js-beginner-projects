function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("result");

    if (weight === "" || height === "") {
        result.style.color = "red";
        result.innerHTML = "Please enter weight and height!";
        return;
    }

    weight = Number(weight);
    height = Number(height) / 100; // convert cm to meters

    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        result.style.color = "blue";
        result.innerHTML = "BMI: " + bmi.toFixed(2) + " (Underweight)";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        result.style.color = "green";
        result.innerHTML = "BMI: " + bmi.toFixed(2) + " (Normal)";
    }
    else {
        result.style.color = "red";
        result.innerHTML = "BMI: " + bmi.toFixed(2) + " (Overweight)";
    }
}