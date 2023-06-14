const express = require("express");
require("./Config/set07database");

const port = 4567;

const app = express();

app.get("/", (req, res) => {
  try {
    return res.status(200).json({
      message: "You have just hit on the endpoints",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server is listening on port ", port);
});
// const express = require("express");
// require("./Config/set07database");

// const port = 4567;

// const app = express();

// app.get("/", (req, res) => {
//   try {
//     return res.status(200).json({
//       message: "You have just hit on the endpoints",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(port, () => {
//   console.log("Server is listening on port ", port);
// });
