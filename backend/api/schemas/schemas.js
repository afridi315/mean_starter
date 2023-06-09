const mongoose = require('mongoose');

//Define the schema
const schema = mongoose.Schema;

//Create company schema
const companySchema = new schema({
    company_name: {type: String, required: true, min: 5},
    address: {type: String, required: true},
    city: {type: String, required: true},
    phone: {type: String, required: true, min: 11, max: 13},
    email: {type: String, required: true, unique: true},
    description: String,
    tagline: String
});

//Create schema (top leve document)
const providerSchema = new schema({
    id: { type: Number, required: true, unique: true },
    firstname: {type: String, required: true, min: 5},
    lastname: {type: String, required: true, min: 5},
    position: String,
    company: companySchema
});

module.exports = {providerSchema, companySchema}