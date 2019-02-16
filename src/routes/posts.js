const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController")

//router.get("/posts", postController.index);
router.get("/posts/lost", postController.lost);
router.get("/posts/found", postController.found);

module.exports = router;
