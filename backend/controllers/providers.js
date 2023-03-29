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

//Edit form
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