document.getElementById("tasks").focus();
let taskList = document.getElementById("tasklist");
var tasks = [];

const buttonForTask = document.querySelector("div.newtasks button");
let outputElement = document.createElement("p");
outputElement.innerText = 0 + "/" + 0 + " completed";
taskList.insertAdjacentElement("beforeend", outputElement);

buttonForTask.addEventListener("click", addTask);

function addTask () {
    let liElement = document.createElement("li");
    let check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    let taskValue = document.createTextNode(document.getElementById("tasks").value);
    tasks.push({
        taskname: taskValue
    });

    liElement.appendChild(check);
    liElement.appendChild(taskValue);
    taskList.insertBefore(liElement, taskList.children[0]);
    document.getElementById("tasks").value = "";

    let allCheckBox = document.querySelectorAll("input[type=checkbox]");
    outputElement.innerText = (document.querySelectorAll('input[type="checkbox"]:checked').length) + "/" + allCheckBox.length + " completed";

    allCheckBox.forEach((item) => {
        item.addEventListener('input', () => {
            if (item.checked){
                item.parentElement.style.textDecoration = "line-through";
            }
            else{
                item.parentElement.style.textDecoration ="none";
            }
            outputElement.innerText = (document.querySelectorAll('input[type="checkbox"]:checked').length) + "/" + allCheckBox.length + " completed";
        });
    });
}

