const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("This is all task");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    success: true,
    data: task,
  });
};

const singleTask = (req, res) => {
  res.status(200).json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Update my task");
};

const deleteTask = (req, res) => {
  res.send("Delete my task");
};

module.exports = {
  getAllTasks,
  createTask,
  singleTask,
  updateTask,
  deleteTask,
};
