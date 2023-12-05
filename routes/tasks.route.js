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
router.get("/:id", singleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
