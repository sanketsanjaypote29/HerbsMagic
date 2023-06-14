// models/product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  productType: {
    type: Schema.Types.ObjectId,
    ref: 'ProductType',
    required: true
  },
  productDomain: {
    type: Schema.Types.ObjectId,
    ref: 'ProductDomain',
    required: true
  },
  mrpPrice: {
    type: Number,
    required: true
  },
  gst: {
    type: Number,
    required: true
  },
  skinType: {
    type: String,
    required: true
  },
  productBenefits: {
    type: String,
    required: true
  },
  materialTypeFree: {
    type: String,
    required: true
  },
  specialIngredients: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  directions: {
    type: String,
    required: true
  },
  genderTarget: {
    type: String,
    required: true
  },
  customerAgeGroup: {
    type: String,
    required: true
  },
  recommendedUses: {
    type: String,
    required: true
  },
  specialFeatures: {
    type: String,
    required: true
  },
  approvedBy: {
    type: String,
    required: true
  },
  recyclable: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;