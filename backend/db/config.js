const mongoose = require("mongoose");

// connecting to database
mongoose.set("strictQuery", true); // always use
const connection = (mongoose.connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/resume"); // url mongodbcompass
});

module.exports = connection;
