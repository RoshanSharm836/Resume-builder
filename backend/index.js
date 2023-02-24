const express = require("express");
const connection = require("./db/config");
const app = express();
const PORT = 8000;

app.use(express.json());

app.listen(PORT, () => {
  try {
    connection();
    console.log("listing on port on ", PORT);
  } catch (error) {
    console.log(error);
  }
});
