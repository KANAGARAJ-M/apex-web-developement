function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }
  
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      taskItem.remove();
    };
  
    taskItem.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(taskItem);
  
    taskInput.value = '';
  }
  