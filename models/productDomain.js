// models/productDomain.js

const mongoose = require('mongoose');

const productDomainSchema = new mongoose.Schema({
  domainId: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  initials: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    required: true
  }
});

const ProductDomain = mongoose.model('ProductDomain', productDomainSchema);

module.exports = ProductDomain;
