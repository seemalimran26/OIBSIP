const inputBox = document.getElementById("input-box");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");
const pendingCount = document.getElementById("pending-count");
const completedCount = document.getElementById("completed-count");
const pendingEmpty = document.getElementById("pending-empty");
const completedEmpty = document.getElementById("completed-empty");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
/* Add Task */
function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
    createdAt: new Date().toLocaleString(),
  };
  tasks.push(newTask);
  saveTasks();
  inputBox.value = "";
  inputBox.focus();
  displayTasks();
}
/* Display Tasks */
function displayTasks() {
  pendingList.innerHTML = "";
  completedList.innerHTML = "";
  let pendingTasks = tasks.filter((task) => !task.completed);
  let completedTasks = tasks.filter((task) => task.completed);
  pendingTasks.forEach((task) => {
    createTaskElement(task, pendingList);
  });
  completedTasks.forEach((task) => {
    createTaskElement(task, completedList);
  });
  updateCounts();
  updateEmptyMessages();
}
/* Create Task Element */
function createTaskElement(task, list) {
  const li = document.createElement("li");
  li.className = "task-item";
  if (task.completed) {
    li.classList.add("completed");
  }
  li.innerHTML = `
        <button class="task-check" onclick="toggleTask(${task.id})"></button>
        <div class="task-content">
            <span class="task-text">${escapeHTML(task.text)}</span>
            <small class="task-time">
                Added: ${task.createdAt}
            </small>
        </div>
        <div class="task-actions">
            <button
                class="edit-btn"
                onclick="editTask(${task.id})">
                Edit
            </button>
            <button
                class="delete-btn"
                onclick="deleteTask(${task.id})">
                Delete
            </button>
            <button
                class="complete-btn"
                onclick="toggleTask(${task.id})">
                ${task.completed ? "Mark Pending" : "Mark Complete"}
            </button>
        </div>
    `;
  list.appendChild(li);
}
/* Mark Complete / Mark Pending */
function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
  saveTasks();
  displayTasks();
}
/* Edit Task */
function editTask(id) {
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    return;
  }
  const newText = prompt("Edit your task:", task.text);
  if (newText === null) {
    return;
  }
  const updatedText = newText.trim();
  if (updatedText === "") {
    alert("Task cannot be empty!");
    return;
  }
  task.text = updatedText;
  saveTasks();
  displayTasks();
}
/* Delete Task */
function deleteTask(id) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (!confirmDelete) {
    return;
  }
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  displayTasks();
}
/* Update Task Counts */
function updateCounts() {
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  pendingCount.textContent = `${pendingTasks} pending`;
  completedCount.textContent = `${completedTasks} completed`;
}
/* Empty State Messages */
function updateEmptyMessages() {
  if (tasks.some((task) => !task.completed)) {
    pendingEmpty.style.display = "none";
  } else {
    pendingEmpty.style.display = "block";
  }
  if (tasks.some((task) => task.completed)) {
    completedEmpty.style.display = "none";
  } else {
    completedEmpty.style.display = "block";
  }
}
/* Save Tasks to localStorage */
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
/* Prevent HTML Injection */
function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
/* Add Task with Enter Key */
inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
/* Display Saved Tasks */
displayTasks();
