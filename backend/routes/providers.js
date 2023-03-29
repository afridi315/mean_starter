var express = require('express');
var router = express.Router();
const providersController = require('../controllers/providers');

/* GET listing page. */
router.get('/', providersController.list);

/* GET details page. */
router.get('/details/:id', providersController.details);

/* GET edit page. */
router.get('/edit/:id', providersController.edit);

/* GET update the edited data . */
router.post('/update/:id', providersController.update);

module.exports = router;
