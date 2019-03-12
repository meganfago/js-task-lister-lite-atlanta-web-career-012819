
const taskList = new TaskList();
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); 
  // above is the form node
  form.addEventListener("submit", handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  const taskName = event.target.elements["new-task-description"].value;
  const brandNewTask = newTask(taskName);
  renderTask(brandNewTask); 
}

function newTask(taskName){
  const task = new Task(taskName);
  taskList.allTasks.push(task);
  return task;
}

function renderTask(task){
  const ulTag = document.getElementById("tasks");
    const liTag = document.createElement("li");
    liTag.innerHTML = task.name;
    ulTag.appendChild(liTag);
}



