var providers = require("../models/providers.model");
const providerDb = require('../db/db');
const { ObjectId } = require('mongodb');

//Utilility functions
//Check if the list is empty
function isListEmpty(obj) {
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0);
}

//Check if ID already exists
/* function checkExistingUID(id) {
    return providers.find( provider => provider.id == id);
}
//Generate a unique ID
function generatUID(providers) {
    let min = 100000;
    let max = 999999;
    do {
        var id = Math.floor(Math.random() * (max - min) + min)
    } while(checkExistingUID(id));
    return id;
} */

//CRUD Operations

// POST
module.exports.create = function (req, res) {

    try {
        var provider = req.body;
        providerDb.create(provider)
            .then(result => {
                res.status(201);
                res.send(result);
            })
            .catch(error => {
                handleError(res, error);
            })

    } catch (ex) {
        handleError(res, ex)
    }
}

//GET all
module.exports.readAll = function (req, res) {

    try {
        providerDb.find()
            .then(result => {
                if (isListEmpty(result)) {
                    console.log(result)
                    res.status(204);
                    res.send('No data. Nothing to read.');
                }
                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res, error))
    } catch (ex) {
        handleError(res, ex)
    }

}

//GET one
module.exports.readOne = function (req, res) {

    try {
        let id = new ObjectId(req.params.id);
        providerDb.find({ '_id': id })
            .then(result => {
                if (isListEmpty(result)) {
                    res.status(204)
                    res.send('No data. Nothing to read.');
                }

                res.status(200);
                res.send(result)
            }).catch(error => handleError(res, error))

    } catch (ex) {
        handleError(res, ex)
    }

}

//UPDATE
module.exports.update = function (req, res) {

    try {
        let id = new ObjectId(req.params.id)
        let provider = req.body;
        providerDb.findOneAndUpdate({ '_id': id }, provider, { new: true })
            .then(result => {
                if (isListEmpty(result)) {
                    res.status(204)
                    res.send('No data. Nothing to update.');
                }
                res.status(200);
                res.send(result)
            })
            .catch(error => {
                handleError(res, error)
            })
    } catch (ex) {
        handleError(res, ex)
    }

};

//DELETE one
module.exports.deleteOne = function (req, res) {

    try {
        let id = new ObjectId(req.params.id)
        providerDb.findOneAndDelete({ '_id': id })
            .then(result => {

                if (isListEmpty(result)) {
                    res.status(400)
                    res.send('No data. Nothing to delete.');
                }
                res.status(200);
                res.send(result);
            })
            .catch(error => {
                handleError(res, error)
            })

    } catch (ex) {
        handleError(res, ex)
    }
};

//DELETE all
module.exports.deleteAll = function (req, res) {
    try {
        providerDb.deleteMany({})
            .then(result => {
                if (result.deletedCount === 0) {
                    res.status(204)
                    res.send('No data. Nothing to delete.');
                }
                res.status(200);
                res.send('All providers are deleted!')
            })
            .catch(error => {
                handleError(res, error)
            })

    } catch (ex) {
        handleError(res, ex)
    }
};

function handleError(res, error) {
    res.status(200);
    res.send('Something went wrong!\n' + error);
}
