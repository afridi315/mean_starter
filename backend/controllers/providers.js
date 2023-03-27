const providers = require('../models/providers')

module.exports.list = function(req, resp) {
    resp.render('providers/providers-list', { title : "Service Providers", providers : providers})
}

module.exports.details = function(req, resp) {
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id);
    resp.render('providers/providers-details', { id : id,  title : "Provider Details", company : provider.company})
}