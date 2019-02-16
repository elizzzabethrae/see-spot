const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Welcome to See Spot");
});

module.exports = router;
