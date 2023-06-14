const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  isMale: {
    type: Boolean,
  },
  course: {
    type: String,
  },
});

const studentModel = mongoose.model("Student Model", studentSchema);

module.exports = studentModel;
// const mongoose = require("mongoose");

// const studentSchema = mongoose.Schema({
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
//   isMale: {
//     type: Boolean,
//   },
//   course: {
//     type: String,
//   },
// });

// const studentModel = mongoose.model("Student Model", studentSchema);

// module.exports = studentModel;
