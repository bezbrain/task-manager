const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  singleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controllers");

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:taskID", singleTask);
router.patch("/:taskID", updateTask);
router.delete("/:taskID", deleteTask);

module.exports = router;
