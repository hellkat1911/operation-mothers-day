const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');

// debug
router.get('/test', smsController.test);
// send an SMS
router.post('/sms', smsController.send);

module.exports = router;
