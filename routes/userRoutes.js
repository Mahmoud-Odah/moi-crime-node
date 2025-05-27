const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const validateRequest = require("../middleware/validateRequest");
const {
  userCreateValidation,
  userUpdateValidation,
} = require("../validators/userValidator");

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.use(auth); // All routes are protected

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", userCreateValidation, validateRequest, createUser);
router.put("/:id", userUpdateValidation, validateRequest, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
