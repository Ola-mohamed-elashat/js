// task1
let font = document.getElementById("font");
let color = document.getElementById("color");
let size = document.getElementById("size");
let text = document.getElementById("text");

let savefont = localStorage.getItem("font")
let savecolor = localStorage.getItem("color")
let saveSize = localStorage.getItem("size")

text.style.fontFamily = "Open Sans"
text.style.color = "red";
text.style.fontSize = "16px";
font.onchange = function () {
    text.style.fontFamily = font.value
    localStorage.setItem("font", font.value)
};
color.onchange = function () {
    text.style.color = color.value
    localStorage.setItem("color", color.value)
};
size.onchange = function () {
    text.style.fontSize = size.value + "px"
    localStorage.setItem("size", size.value)
};
if (savefont !== null) {
    text.style.fontFamily = savefont;
    font.value = savefont;
}
if (savecolor !== null) {
    text.style.color = savecolor;
    color.value = savecolor;
}
if (saveSize !== null) {
    text.style.fontSize = saveSize + "px";
    size.value = saveSize;
};
// task2
let name = document.getElementById("name");
let email = document.getElementById("email");
let age = document.getElementById("age");
let country = document.getElementById("country");
name.oninput = function () {
    sessionStorage.setItem("name", name.value)
};
email.oninput = function () {
    sessionStorage.setItem("email", email.value)
};
age.oninput = function () {
    sessionStorage.setItem("age", age.value)
};
country.oninput = function () {
    sessionStorage.setItem("country", country.value)
};

name.value = sessionStorage.getItem("name") || "";
email.value = sessionStorage.getItem("email") || "";
age.value = sessionStorage.getItem("age") || "";
country.value = sessionStorage.getItem("country") || "";
// Challenge

let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let arrayOfTasks = [];
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}
getDataFromLocalStorage();
submit.onclick = function () {
    if (input.value !== "") {
        addTaskToArray(input.value);    
        input.value = ""; 
    }
};
tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
});

function addTaskToArray(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };
    arrayOfTasks.push(task);
    addElementsToPageFrom(arrayOfTasks);
    addDataToLocalStorageFrom(arrayOfTasks);
}
function addElementsToPageFrom(arrayOfTasks) {
    tasksDiv.innerHTML = "";

    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));

        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        div.appendChild(span);

        tasksDiv.appendChild(div);
    });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks);
    }
}
function deleteTaskWith(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTasks);
}