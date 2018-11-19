var express = require('express');
var router = express.Router();

const authentificator = require('../controller/authentification');

/*GET cookie user*/
router.get('/me', authentificator.getSessionUser);

/* POST create User */
router.post('/', authentificator.signup);

/* POST login User */
router.post('/login', authentificator.login);


/* POST logout User */
router.get('/logout', authentificator.logout);

module.exports = router;
