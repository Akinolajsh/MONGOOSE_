const mongoose = require("mongoose");

const carUrl = `mongodb://0.0.0.0:27017/carDB`;

const carDatabase = async (req, res) => {
  try {
    const carConnect = await mongoose.connect(carUrl);
    console.log("");
    console.log(`Database connection ${carConnect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = carDatabase();
// const mongoose = require("mongoose");

// const carUrl = `mongodb://0.0.0.0:27017/carDB`;

// const carDatabase = async (req, res) => {
//   try {
//     const carConnect = await mongoose.connect(carUrl);
//     console.log("");
//     console.log(`Database connection ${carConnect.connection.host}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = carDatabase();
