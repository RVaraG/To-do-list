let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    
    tasks.push({ text: taskInput.value, completed: false });

    taskInput.value = '';

    updateTaskList(taskList);
  }
}

function updateTaskList(taskList) {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button onclick="markAsCompleted(${index})">Completada</button>
      <button onclick="editTask(${index})">Editar</button>
      <button onclick="deleteTask(${index})">Eliminar</button>
    `;
    taskList.appendChild(li);
  });
}

function markAsCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  const taskList = document.getElementById('taskList');
  updateTaskList(taskList);
}

function editTask(index) {
  const newText = prompt('Editar tarea:', tasks[index].text);
  if (newText !== null) {
    tasks[index].text = newText;
    const taskList = document.getElementById('taskList');
    updateTaskList(taskList);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  const taskList = document.getElementById('taskList');
  updateTaskList(taskList);
}
