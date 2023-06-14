const mongoose = require("mongoose");

const todoUrl = `mongodb://0.0.0.0:27017/todoDatabase`;

const todoDatabase = async () => {
  try {
    const todoConnect = await mongoose.connect(todoUrl);
    console.log("");
    console.log(`Database connection on ${todoConnect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = todoDatabase();
// const mongoose = require("mongoose");

// const todoUrl = `mongodb://0.0.0.0:27017/todoDatabase`;

// const todoDatabase = async () => {
//   try {
//     const todoConnect = await mongoose.connect(todoUrl);
//     console.log("");
//     console.log(`Database connection on ${todoConnect.connection.host}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = todoDatabase();
