const Router = require("express").Router;
const router = Router();
const userController = require("../controllers/user.controller");

router.post("/add", (req, res) => new userController().createUser(req, res));
router.put("/update/", (req, res) => new userController().updateUser(req, res));
router.delete("/delete/:id", (req, res) => new userController().deleteUser(req, res));
router.get("/", (req, res) => new userController().getUsers(req, res));
router.get("/:id", (req, res) => new userController().getOneUser(req, res));

module.exports = router;