const mongoose = require("mongoose");

// mongoose schema is used for giving structure and getting some of the perdefined function
const resumeschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    job_type: { type: String, required: true },
    summary: { type: String, required: true },
    address: { type: Number, required: true },
    city: { type: Number, required: true },
    portfolio: { type: Number, required: false },
    linkedIn: { type: Number, required: false },
    github: { type: Number, required: false },
    skill: [{ type: String, required: true }],
    hobbie: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const resume = mongoose.model("resume", resumeschema);
module.exports = resume;
