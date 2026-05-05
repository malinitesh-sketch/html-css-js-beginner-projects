function calculateGrade() {
    let marks = document.getElementById("marks").value;
    let result = document.getElementById("result");

    if (marks === "") {
        result.style.color = "red";
        result.innerHTML = "Please enter your marks!";
        return;
    }

    marks = Number(marks);

    if (marks < 0 || marks > 100) {
        result.style.color = "orange";
        result.innerHTML = "Enter valid marks (0-100)";
    }
    else if (marks >= 90) {
        result.style.color = "green";
        result.innerHTML = "Grade A 🎉";
    }
    else if (marks >= 70) {
        result.style.color = "blue";
        result.innerHTML = "Grade B 👍";
    }
    else if (marks >= 50) {
        result.style.color = "purple";
        result.innerHTML = "Grade C 🙂";
    }
    else {
        result.style.color = "red";
        result.innerHTML = "Fail ❌";
    }
}