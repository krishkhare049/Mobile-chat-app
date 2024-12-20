const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUserConversations/:skip', userController.getUserConversations)
// router.get('/searchUserByName/:text/:skip', userController.searchUserByName)
router.get('/searchUserByName/:text', userController.searchUserByName)
// router.get('/getConversationIdWithOtherParticipant/:otherParticipantId/', userController.getConversationIdWithOtherParticipant)
// router.get()
// router.get()
// router.get()
// router.get()
// router.post()

module.exports = router;