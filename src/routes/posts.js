const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const validation = require("./validation");


router.get("/posts/lost", postController.lost);
router.get("/posts/found", postController.found);
router.get("/posts/reunited", postController.reunited);
router.get("/posts/new", postController.new);
router.post("/posts/create", validation.validatePosts, postController.create);
router.get("/posts/:id", postController.show);
router.get("/posts/:id/edit", postController.edit);
router.post("/posts/:id/update", validation.validatePosts, postController.update);
router.post("/posts/:id/destroy", postController.destroy);

module.exports = router;
