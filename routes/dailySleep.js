const express = require('express');
const router = express.Router();
const sleepUpdate = require('../controllers/dailySleepControls')

router.post('/', sleepUpdate)

module.exports = router