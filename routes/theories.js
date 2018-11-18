var express = require('express');
var router = express.Router();

const authentificator = require('../controller/Theory');

/* POST create theory */
router.post('/', authentificator.addTheory);

/* GET all theories */
router.get('/', authentificator.getAllTheory);

/* UPDATE theory */
router.put('/', authentificator.updateTheory);


/* DELETE theory */
router.delete('/', authentificator.deleteTheory);

module.exports = router;
