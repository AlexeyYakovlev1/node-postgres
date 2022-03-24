const Router = require("express").Router;
const router = Router();
const postController = require("../controllers/post.controller");

router.post("/add", (req, res) => new postController().createPost(req, res));
router.get("/", (req, res) => new postController().getPostsByUser(req, res));

module.exports = router;