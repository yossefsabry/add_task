<h2 align="center">Creating Task List</h2>

📝✨ Creating Task List with Local Storage 🗒️✉️

This code snippet demonstrates how to create a task list using JavaScript and store the tasks in the browser's local storage. Each task is displayed on the page with a delete button, allowing users to easily remove tasks. Here's a breakdown of the code:

🔸 The code starts by selecting the elements with the class names "add" and "tasks" using the querySelector method. 

🔸 On page load, the code retrieves any existing tasks from the local storage and adds them to the task list. 

🔸 When the "add" button is clicked, an event listener is triggered. The input value is checked, and if it's not empty, a unique ID is generated using the current timestamp. The task is then stored in the local storage with the 
generated ID as the key and the input value as the value. 

🔸 The createTask function is called to create a task item. It creates a div element that contains a span element to display the task content and a button element for deleting the task. The task item and delete button are given appropriate styles using CSS. 

🔸 The task item is appended to the "tasks" container on the page. 

🔸 When the delete button is clicked, an event listener is triggered. The parent task item is removed from the DOM, and the corresponding task is removed from the local storage.

Overall, this code provides a simple and efficient way to manage tasks using local storage. 📋✔️


### Email : yossefsabry66@gmail.com