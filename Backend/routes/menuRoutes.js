const express = require('express');
const { getBurger } = require('../controller/menuController');
const router = express.Router();


router.get('/:category',getBurger);

module.exports = router;