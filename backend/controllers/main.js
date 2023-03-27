// main controller

module.exports.home = function(req, resp) {
    resp.render('index', {title: 'The MEAN Stack Agency'});
}
module.exports.about = function(req, resp) {
    resp.render('about', {title: 'About'});
}
module.exports.contact = function(req, resp) {
    resp.render('contact', {title: 'Contact Us'});
}
module.exports.services = function(req, resp) {
    resp.render('services', {title: 'Services'});
}