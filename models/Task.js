const mongoose = require("mongoose");

// Schema is used to dictate the structure of the data
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Now, let's set up the models. Models can just be seen as the each collection in the db
module.exports = mongoose.model("Task", TaskSchema);
