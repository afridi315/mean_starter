const mongoose = require('mongoose');
const {providerSchema} = require('../schemas/schemas');

//Create provider model
const providerModel = mongoose.model('provider', providerSchema);

module.exports = { providerModel };