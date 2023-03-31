var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller')

//HTTP Verbs

//POST
router.post('/providers', mainController.create);

//GET all
router.get('/providers', mainController.readAll);

//GET one
router.get('/providers/:id', mainController.readOne);

//PUT
router.put('/providers/:id', mainController.update);

//DELETE
router.delete('/providers/:id', mainController.deleteOne);

//DELETE all
router.delete('/providers', mainController.deleteAll);

//No matching API endpoints
router.post('/*', notFoud);
router.get('/*', notFoud);
router.put('/*', notFoud);
router.delete('/*', notFoud);

//Not found handler function
function notFoud(req, res) {
    res.status(404)
    res.send('Not valid endpoint!')
}

module.exports = router;