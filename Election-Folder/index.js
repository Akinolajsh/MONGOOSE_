const express = require("express");
require("./Config/electDatabase");

const port = 3456;

const app = express();

app.get("/", (req, res) => {
  try {
    return res.status(200).json({
      message: "You have just hit on an endpoint",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server listening on port ", port);
});
// const express = require("express");
// require("./Config/electDatabase");

// const port = 3456;

// const app = express();

// app.get("/", (req, res) => {
//   try {
//     return res.status(200).json({
//       message: "You have just hit on an endpoint",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(port, () => {
//   console.log("Server listening on port ", port);
// });
