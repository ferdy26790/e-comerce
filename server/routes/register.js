const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
/* GET users listing. */
router.post('/', userController.register)

module.exports = router;
