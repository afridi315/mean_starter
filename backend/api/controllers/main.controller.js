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

    if (isListEmpty(providers)) {
        res.status(204)
        res.send('No data, list is emplty.');
    }

    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);

    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;
    provider.company.email = req.body.company.email;
    provider.company.phone = req.body.company.phone;
    provider.company.company_name = req.body.company.company;
    provider.company.address = req.body.company.address;
    provider.company.city = req.body.company.city;
    provider.company.tagline = req.body.company.tagline;
    provider.company.description = req.body.company.description;

    res.status(200);
    res.send(provider)
};

//DELETE one
module.exports.deleteOne = function (req, res) {
    if (isListEmpty(providers)) {
        res.status(204)
        res.send('No data, Cannot delete.');
    }
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    let index = providers.indexOf(provider);

    //Delete the provider at the index provided
    providers.splice(index, 1);

    res.status(200);
    res.send(provider);
};

//DELETE all
module.exports.deleteAll = function (req, res) {
    if (isListEmpty(providers)) {
        res.status(204)
        res.send('No data, Cannot delete.');
    }
    providers = [];
    res.status(200);
    res.send('All providers are deleted!')
};

function handleError(res, error) {
    res.status(200);
    res.send('Something went wrong!\n' + error);
}
