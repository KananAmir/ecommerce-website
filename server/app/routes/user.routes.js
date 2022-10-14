const router = require("express").Router();
const usersController = require("../controllers/user.controller");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getOneUser);
router.post("/", usersController.addUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;