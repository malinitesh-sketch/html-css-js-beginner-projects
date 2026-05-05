function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value;
    let list = document.getElementById("list");

    if (taskValue === "") {
        alert("Please enter a task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskValue + " <button onclick='removeTask(this)'>Delete</button>";
        list.appendChild(li);

        taskInput.value = ""; // clear input
    }
}

function removeTask(button) {
    let li = button.parentElement;
    li.remove();
}