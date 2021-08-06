const express = require('express')
const router = express.Router();
const createUser = require('../controllers/usercontrol')

router.post('/', createUser);

module.exports = router;