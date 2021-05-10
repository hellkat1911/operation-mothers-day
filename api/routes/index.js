const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// debug
router.get('/test', apiController.test);
// fetch saved selection
router.get('/selection', apiController.getSelection);
// clear previous selection
router.delete('/clear', apiController.clearSelection);
// send an SMS
router.post('/sms', apiController.sendSms);

module.exports = router;
