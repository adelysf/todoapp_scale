const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type:String,
    required:true
  },
  isCompleted: {
    type:String,
    required:true,
    default:"0"
  }

});

module.exports = new mongoose.model("Task", taskSchema);
