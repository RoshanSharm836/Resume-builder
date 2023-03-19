const express = require("express");
const resume = require("../Schema/resume.schema");

const router = express.Router();

router.get("/:param", async (req, res) => {
  try {
    console.log(req.params);
    res.send("yes");
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await resume.find();
    console.log("data", data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    const data = await resume.create(req.body);
    console.log("data", data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
