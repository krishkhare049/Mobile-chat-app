const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// router.get('/:messageId', messageController.getMessage)
router.post('/addMessage', messageController.addMessage);
// router.get()
// router.get()
// router.get()
// router.get()
// router.post()

module.exports = router;