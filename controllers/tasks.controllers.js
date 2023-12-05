const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    res.statuss(500).json({
      success: false,
      msg: error,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    // console.log(error._message);
    res.status(500).json({
      success: false,
      msg: error,
    });
  }
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
