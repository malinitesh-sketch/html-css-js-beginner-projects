function checkNumber() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.style.color = "red";
        result.innerHTML = "Please enter a number!";
        return;
    }

    num = Number(num);

    if (num % 2 === 0) {
        result.style.color = "green";
        result.innerHTML = num + " is Even";
    } else {
        result.style.color = "blue";
        result.innerHTML = num + " is Odd";
    }
}