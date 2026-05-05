function calculate() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let op = document.getElementById("operation").value;
    let result = document.getElementById("result");

    if (num1 === "" || num2 === "") {
        result.style.color = "red";
        result.innerHTML = "Please enter both numbers!";
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    let answer;

    if (op === "add") {
        answer = num1 + num2;
    } 
    else if (op === "sub") {
        answer = num1 - num2;
    } 
    else if (op === "mul") {
        answer = num1 * num2;
    } 
    else if (op === "div") {
        if (num2 === 0) {
            result.style.color = "orange";
            result.innerHTML = "Cannot divide by zero!";
            return;
        }
        answer = num1 / num2;
    }

    result.style.color = "green";
    result.innerHTML = "Result: " + answer;
}