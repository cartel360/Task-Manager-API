const express = require('express');
const router = express.Router();
const Task = require('../models/task');

module.exports = router;

//Create a Task (POST Method)
router.post('/tasks', async(req, res) => {
    const task = new Task({
        title: req.body.title,
        is_completed: req.body.is_completed
    });

    try {
        const taskToSave = await task.save();
        res.status(201).send(taskToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//Get all Tasks (GET Method)
router.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Get by ID (GET Method)
router.get('/tasks/:id', async(req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        res.status(404).json({ message: `Task with ${req.params.id} Not Found` });
    }
})

//Update Task by ID (PUT Method)
router.put('/tasks/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedTask = req.body;
        const options = { new: true };

        const result = await Task.findByIdAndUpdate(id, updatedTask, options);

        res.status(204).json(result);
    } catch (error) {
        res.status(404).json({ error: "There is no task at that id" });
    }
})

//Delete Task by ID (DELETE Method)
router.delete('/tasks/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id);
        res.status(204).text(`Task with ${task.title} has been deleted`);
    } catch (error) {
        res.status(204).json({ message: "Task Not Found" });
    }
})