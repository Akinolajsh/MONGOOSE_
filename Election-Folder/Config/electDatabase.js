const mongoose = require("mongoose");

const electionUrl = `mongodb://0.0.0.0:27017/electionDatabase`;

const electionDB = async (req, res) => {
  try {
    const electConnect = await mongoose.connect(electionUrl);
    console.log("");
    console.log(
      `Database connection established on ${electConnect.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = electionDB();
// const mongoose = require("mongoose");

// const electionUrl = `mongodb://0.0.0.0:27017/electionDatabase`;

// const electionDB = async (req, res) => {
//   try {
//     const electConnect = await mongoose.connect(electionUrl);
//     console.log("");
//     console.log(
//       `Database connection established on ${electConnect.connection.host}`
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = electionDB();
