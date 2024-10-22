function addTask(){
    const taskInput = document.getElementById('inputtask');
    const newTaskValue = taskInput.value.trim();
    if (newTaskValue === "") {
        alert("Please enter a task before adding!");  // Show a warning alert
        return;  
    }
    const newTask = document.createElement('li')
    const taskList = document.getElementById('taskList')
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputtask').value
    document.getElementById('inputtask').value = ""
    
    deleteTask(newTask)
}

function deleteTask(newTask)
{
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
            newTask.remove()
    }
}
