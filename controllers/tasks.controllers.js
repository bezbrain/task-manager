const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({
    success: true,
    tasks,
  });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    success: true,
    task,
  });
});

const singleTask = asyncWrapper(async (req, res) => {
  const { taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  // We handle this error by ourselves because the structure of the id is still correct but just the alpha-numeric isn't. Hence the error in the catch block below won't catch this error
  if (!task) {
    return res.status(404).json({
      success: true,
      msg: `No task with id: ${taskID}`,
    });
  }
  res.status(200).json({
    success: true,
    task,
  });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({
      success: true,
      msg: `There is no task with the id, ${taskID}`,
    });
  }
  res.status(200).json({
    success: true,
    msg: "Task successfully deleted",
    status: "success",
  });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({
      success: true,
      msg: `There is no task with the id, ${taskID}`,
    });
  }

  res.status(200).json({
    success: true,
    task,
    msg: "Task successfully updated",
  });
});

module.exports = {
  getAllTasks,
  createTask,
  singleTask,
  updateTask,
  deleteTask,
};
