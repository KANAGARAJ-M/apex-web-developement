const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
};

const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (!task) return;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    saveTasks(tasks);
    taskInput.value = '';
    loadTasks();
});

const deleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
};

// Load tasks on page load
document.addEventListener('DOMContentLoaded', loadTasks);
