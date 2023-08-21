let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

// Retrieve tasks from local storage on page load
// if there any task in the localstorage add to tasks
window.addEventListener("load", function () {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    // i make function to create the task
    createTask(key, value);
  }
});

add.onclick = function (event) {
  event.preventDefault(); // prevent the default form submit behavior

  let input = document.querySelector("input");

  if (input.value !== "") {
    let id = Date.now(); // generate a unique ID using the current timestamp
    let key = `task_${id}`;
    let value = input.value;

    // Store the task in local storage
    window.localStorage.setItem(key, value);

    createTask(key, value);

    input.value = ""; // clear the input field after adding the task
  }
};

function createTask(key, value) {
  // create the task item
  let taskItem = document.createElement("div");
  let deleteBtn = document.createElement("button");
  let deleteContent = document.createTextNode("delete");
  deleteBtn.appendChild(deleteContent);
  let taskContent = document.createElement("span");
  let content = document.createTextNode(value);
  taskContent.appendChild(content);

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);

  taskItem.style.cssText =
    "display: flex; justify-content: space-between; align-items: center; width: 100%; height: 100%; background-color: #fff; border-radius: 5px; margin-bottom: 10px; padding: 10px 10px; box-sizing: border-box; flex-wrap: wrap; gap:20px;text-align:center;";
  deleteBtn.style.cssText =
    "font-weight:bold; background-color: #f00; color: #fff; border: none; border-radius: 5px; cursor: pointer; padding:10px 20px; width: 100%;";

  taskContent.style.cssText = "font-weight: bold; font-family: system-ui;";

  tasks.appendChild(taskItem);

  deleteBtn.onclick = (e) => {
    e.preventDefault(); // prevent the default form submit behavior

    e.target.parentNode.remove(); // remove the task item from the DOM

    // Remove the task from local storage
    window.localStorage.removeItem(key);
  };
}
