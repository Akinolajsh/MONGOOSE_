const express = require("express");
require("./Config/todoDatabase");

const port = 5678;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  try {
    return res.status(200).json({
      message: "You have successfully hit on the todo endpoint",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server is listening on port", port);
});
// const express = require("express");
// require("./Config/todoDatabase");

// const port = 5678;

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   try {
//     return res.status(200).json({
//       message: "You have successfully hit on the todo endpoint",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(port, () => {
//   console.log("Server is listening on port", port);
// });
