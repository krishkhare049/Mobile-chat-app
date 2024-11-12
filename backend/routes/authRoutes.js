const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


// Signup route
router.post('/signup', authController.signup);


// Login route
router.post('/login', authController.login);

// // Update user route
// router.put('/update/:userId', authController.updateUser );

// Logout user route-
// router.post('/logout', authController.logout);


module.exports = router;