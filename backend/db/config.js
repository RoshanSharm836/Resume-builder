const mongoose = require("mongoose");

// connecting to database
mongoose.set("strictQuery", true); // always use
const connection = (mongoose.connection = async () => {
  await mongoose.connect(
    `mongodb+srv://fastresume:roshan123@cluster0.l1u6alu.mongodb.net/test`
  ); // url mongodbcompass
});

module.exports = connection;
