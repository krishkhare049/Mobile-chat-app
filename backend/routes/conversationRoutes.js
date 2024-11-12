const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController');

router.get('/getConversationAllMessages/:conversationId/:skip', conversationController.getConversationAllMessages);
// router.get()
// router.get()
// router.get()
// router.get()
// router.get()
// router.post()
router.delete('/deleteConversation/:conversationId', conversationController.deleteConversation)

module.exports = router;