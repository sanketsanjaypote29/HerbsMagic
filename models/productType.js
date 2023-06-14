// models/productType.js

const mongoose = require('mongoose');

const productTypeSchema = new mongoose.Schema({
  typeId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    required: true
  }
});

const ProductType = mongoose.model('ProductType', productTypeSchema);

module.exports = ProductType;