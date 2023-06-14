const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  model: {
    type: String,
  },
  year: {
    type: Number,
  },
  color: {
    type: String,
  },
  make: {
    type: String,
  },
  speed: {
    type: String,
  },
});

const carModel = mongoose.model("Car Panels", carSchema);

module.exports = carModel;
// const mongoose = require("mongoose");

// const carSchema = mongoose.Schema({
//   model: {
//     type: String,
//   },
//   year: {
//     type: Number,
//   },
//   color: {
//     type: String,
//   },
//   make: {
//     type: String,
//   },
//   speed: {
//     type: String,
//   },
// });

// const carModel = mongoose.model("Car Panels", carSchema);

// module.exports = carModel;
