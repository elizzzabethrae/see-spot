const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");
const postController = require("../controllers/postController");

router.get("/", staticController.index);
router.get("/posts/found", postController.found);
router.get("/posts/lost", postController.lost);


module.exports = router;
