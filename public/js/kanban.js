// Tasklist developed with help from walkthrough by Rob Dongas. Developed during class.

// Form DOM elements
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var tasklist = document.querySelector("#tasklist > ul");

// DOM elements for the task input fields
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

// Form submission event listener
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    if (task) {
        addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
    }
})

var taskListArray = [];

// Add task with what users input
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime) {
    let task = {
        taskDescription,
        dueDate,
        completionTime,
        estimatedTime,
        priorityRating,
    };
    taskListArray.push(task);
    renderTask(task);
}

// Display task
function renderTask(task) {

    // Checks task
    updateEmpty();

    // Creates task card
    let item = document.createElement("li");
    item.setAttribute('data-id', task.id);
    item.innerHTML = "<p>" + "<p> Name </p>" + task.taskDescription 
    + "<p> Due Date </p>" + "<li>" + task.dueDate + "</li>" 
    + "<p> Completion Time </p>" + "<li>" + task.completionTime + "</li>" 
    + "<p> Estimated time to complete </p>" + "<li>" + task.estimatedTime + "</li>" 
    + "<p> Priority </p>" + "<li>" + task.priorityRating + "</li>" 
    + "</p>";

    tasklist.appendChild(item);

    // Create Delete Button
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);


    // When delete button is pressed delete task card
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex(task => task.id === Number(id));
        removeItemFromArray(taskListArray, index)
        updateEmpty();
        item.remove();
    })

    // Clear 
    form.reset();
}

// Removes card
function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}


// Hide placeholder
function updateEmpty() {
    if (taskListArray.length > 0) {
        document.getElementById('emptyList').style.display = 'none';
    } else {
        document.getElementById('emptyList').style.display = 'block';
    }
}


//     getTasksFromLocalStorage();
