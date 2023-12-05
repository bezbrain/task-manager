const mongoose = require("mongoose");

// Schema is used to dictate the structure of the data
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// Now, let's set up the models. Models can just be seen as the each collection in the db
module.exports = mongoose.model("Task", TaskSchema);
