const express = require('express');
const { login, signup } = require('../controllers/authController');
const { signupValidation, loginValidation } = require('../validators/authValidator');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.post('/signup', signupValidation, validateRequest, signup);
router.post('/login', loginValidation, validateRequest, login);

module.exports = router;
