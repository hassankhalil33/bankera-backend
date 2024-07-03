const { Router } = require("express");
const router = Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/user.controller");

router.get("/:id", getUser);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
