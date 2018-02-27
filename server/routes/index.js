const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const onlyMe = require('../middlewares/onlyMe');
const Ticket = require('../models/Ticket');
const moment = require('moment');
const User = require('../models/User');
const Response = require('../models/Response');

router.get('/', (req, res, next) => {
    res.render('index', { title: "Pagina principal" })
});