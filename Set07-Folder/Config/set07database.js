const mongoose = require("mongoose");

const set07DB = `mongodb://0.0.0.0:27017/set07database`;

const studentDB = async () => {
  try {
    const connectStudent = await mongoose.connect(set07DB);
    console.log("");
    console.log(`Connecting to ${connectStudent.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = studentDB();
// const mongoose = require("mongoose");

// const set07DB = `mongodb://0.0.0.0:27017/set07database`;

// const studentDB = async () => {
//   try {
//     const connectStudent = await mongoose.connect(set07DB);
//     console.log("");
//     console.log(`Connecting to ${connectStudent.connection.host}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = studentDB();
