const mongoose = require("mongoose");

const electionSChema = mongoose.Schema({
  party: {
    type: String,
  },
  votes: {
    type: Number,
  },
  voterName: {
    type: String,
  },
  candidateName: {
    type: String,
  },
});

const electionModel = mongoose.model("Election Model", electionSChema);

module.exports = electionModel;
// const mongoose = require("mongoose");

// const electionSChema = mongoose.Schema({
//   party: {
//     type: String,
//   },
//   votes: {
//     type: Number,
//   },
//   voterName: {
//     type: String,
//   },
//   candidateName: {
//     type: String,
//   },
// });

// const electionModel = mongoose.model("Election Model", electionSChema);

// module.exports = electionModel;
