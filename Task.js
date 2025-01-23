

let tasks = []; 
let taskId = 1; 

// Helper functions
function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

function addTask(task) {
    task.id = taskId++;
    tasks.push(task);
    return task;
}

function updateTask(id, updatedTask) {
    const task = getTaskById(id);
    if (!task) return null;
    task.title = updatedTask.title;
    task.description = updatedTask.description;
    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return null;
    tasks.splice(index, 1);
    return true;
}

module.exports = { getAllTasks, getTaskById, addTask, updateTask, deleteTask };
