const express = require("express");
const connection = require("./db/config");
const router = require("./Routes/resume.model");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  try {
    connection();
    console.log("listing on port on ", PORT);
  } catch (error) {
    console.log(error);
  }
});
