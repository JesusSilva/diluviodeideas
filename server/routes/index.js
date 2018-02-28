const express = require('express');
const router = express.Router();
//const onlyMe = require('../middlewares/onlyMe');
const moment = require('moment');
const Ticket = require('../models/Idea');
const User = require('../models/User');

router.get('/', (req, res, next) => {
    res.render('index', { title: "Pagina principal" })
});

module.exports = router;