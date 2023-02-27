const mongoose = require("mongoose");

// mongoose schema is used for giving structure and getting some of the perdefined function
const resumeschema = new mongoose.Schema(
  {
    city: { type: String },
    country: { type: String },
    dob: { type: String },
    edu: { type: Object, required: true },
    email: { type: String },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    hobbies: { type: Array, value: [String] },
    phone: { type: String },
    skills: { type: Array, value: [String] },
    summary: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const resume = mongoose.model("resume", resumeschema);
module.exports = resume;
