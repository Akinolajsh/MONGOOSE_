const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
});

const todoModel = mongoose.model("todo Model", todoSchema);

module.exports = todoModel;
// const mongoose = require("mongoose");

// const todoSchema = mongoose.Schema({
//   title: {
//     type: String,
//   },
//   description: {
//     type: String,
//   },
//   date: {
//     type: String,
//   },
//   complete: {
//     type: Boolean,
//   },
// });

// const todoModel = mongoose.model("todo Model", todoSchema);

// module.exports = todoModel;
