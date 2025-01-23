// routes/tasks.js
const express = require('express');
const router = express.Router();
const { getAllTasks, getTaskById, addTask, updateTask, deleteTask } = require('../data/Task');

// GET /tasks - Retrieve all tasks
router.get('/tasks', (req, res) => {
    res.status(200).json(getAllTasks());
});

// GET /tasks/:id - Retrieve a specific task by ID
router.get('/tasks/:id', (req, res) => {
    const task = getTaskById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
});

// POST /tasks - Create a new task
router.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required" });
    }

    const newTask = addTask({ title, description });
    res.status(201).json(newTask);
});

// PUT /tasks/:id - Update an existing task by ID
router.put('/tasks/:id', (req, res) => {
    const task = getTaskById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });

    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required" });
    }

    const updatedTask = updateTask(parseInt(req.params.id), { title, description });
    res.status(200).json(updatedTask);
});

// DELETE /tasks/:id - Delete a task by ID
router.delete('/tasks/:id', (req, res) => {
    const result = deleteTask(parseInt(req.params.id));
    if (!result) return res.status(404).json({ message: "Task not found" });
    res.status(204).send();
});

module.exports = router;
