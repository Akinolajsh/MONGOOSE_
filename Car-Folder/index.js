const express = require("express");

const port = 2345;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  try {
    return res.status(200).json({
      message: "You have successfully hit on an endpoint",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server is listening to: ", port);
});
// const express = require("express");

// const port = 2345;

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   try {
//     return res.status(200).json({
//       message: "You have successfully hit on an endpoint",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(port, () => {
//   console.log("Server is listening to: ", port);
// });
