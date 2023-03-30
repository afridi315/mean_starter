var providers = require("../models/providers.model");

//CRUD Operations

// POST
module.exports.create = function (req, res) {
    //Create random ID
    let min = 100000;
    let max = 999999;
    let id = Math.floor(Math.random() * (max - min) + min)

    //Creating provider
    let provider = {
        id : id,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        position : req.body.position,
        company : {
            email : req.body.company.email,
            phone : req.body.company.phone,
            company_name : req.body.company.company,
            address : req.body.company.address,
            city : req.body.company.city,
            tagline : req.body.company.tagline,
            description : req.body.company.description
        }
    }

    // Add new provide to the list
    providers.push(provider);
    res.status(200);
    res.send(provider);
};

//GET all
module.exports.readAll = function (req, res) {
    res.status(200);
    res.send(providers);
};

//GET one
module.exports.readOne = function (req, res) {
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id);
    res.status(200);
    res.send(provider)
};

//UPDATE
module.exports.update = function (req, res) {
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id);

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
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id);
    let index = providers.indexOf(provider);

    //Delete the provider at the index provided
    providers.splice(index, 1);

    res.status(200);
    res.send(provider); 
};

//DELETE all
module.exports.deleteAll = function (req, res) {
    providers = [];
    res.status(200);
    res.send('All providers are deleted!')
};
