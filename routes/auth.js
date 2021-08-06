const express = require('express')
const router = express.Router();
const authenticate = require('../controllers/authcontrol')

router.post('/',authenticate);

module.exports = router;