const { Router } = require("express");
const router = Router();
const {
  getUser,
  createUser
} = require("../controllers/user.controller");

router.get("/:username", getUser);
router.post("/", createUser);
// router.put("/", updateUser);
// router.delete("/", deleteUser);

module.exports = router;
