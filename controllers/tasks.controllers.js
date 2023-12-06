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

const singleTask = async (req, res) => {
  try {
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
      data: task,
    });
  } catch (error) {
    // The mongoose error here would catch wrong structure of the id
    res.status(500).json({
      success: false,
      msg: error,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskID } = req.params;
    // const body = req.body;

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
      data: task,
      msg: "Task successfully updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: error,
    });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  singleTask,
  updateTask,
  deleteTask,
};
