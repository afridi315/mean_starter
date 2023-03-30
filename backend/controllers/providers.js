const providers = require('../models/providers')

//List providers
module.exports.list = function(req, resp) {
    resp.render('providers/providers-list', { title : "Service Providers", providers : providers})
}

//Details page
module.exports.details = function(req, resp) {
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id);
    resp.render('providers/providers-details', { id : id,  title : "Provider Details", company : provider.company})
}

//Edit form
module.exports.edit = function(req, resp) {
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id);
    resp.render('providers/providers-edit', { id : id,  title : "Provider Edit", company : provider})
}

//Save updated
module.exports.update = function(req, resp) {
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id);

    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;
    provider.company.email = req.body.email;
    provider.company.phone = req.body.phone;
    provider.company.company_name = req.body.company;
    provider.company.address = req.body.address;
    provider.company.city = req.body.city;
    provider.company.tagline = req.body.tagline;
    provider.company.description = req.body.description;

    resp.render('providers/providers-update', { title : "Update"})
}

//Add Provider form
module.exports.addform = function(req, resp) {
    resp.render('providers/providers-add-form', { title : "Add Provider"})
}

//Save Provider
module.exports.add = function(req, resp) {
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
            email : req.body.email,
            phone : req.body.phone,
            company_name : req.body.company,
            address : req.body.address,
            city : req.body.city,
            tagline : req.body.tagline,
            description : req.body.description
        }
    }

    // Add new provide to the list
    providers.push(provider);
    resp.render('providers/providers-add', { title : "Added"})
}

//Delete
module.exports.delete = function(req, resp) {
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id);
    let company = provider.company.company_name;

    let index = providers.indexOf(provider);

    //Delete the provider at the index provided
    providers.splice(index, 1);

    resp.render('providers/providers-delete', { title : "Provider Delete", company : company})
}
