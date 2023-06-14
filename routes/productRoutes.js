// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/product');

function addLeadingZero(number) {
  number+=1
  let numberString = number.toString();
  while (numberString.length < 3) {
    numberString = "0" + numberString
  }
  return numberString;
}
// Create a new product
router.post('/products', async (req, res) => {
  const productData = req.body;

  // Check for missing or empty values
  const requiredFields = [
    { key: 'productID', label: 'Product ID' },
    { key: 'productName', label: 'Product Name' },
    { key: 'productType', label: 'Product Type' },
    { key: 'productDomain', label: 'Product Domain' },
    { key: 'mrpPrice', label: 'MRP Price' },
    { key: 'gst', label: 'GST' },
    { key: 'skinType', label: 'Skin Type' },
    { key: 'productBenefits', label: 'Product Benefits' },
    { key: 'materialTypeFree', label: 'Material Type Free' },
    { key: 'specialIngredients', label: 'Special Ingredients' },
    { key: 'description', label: 'Description' },
    { key: 'directions', label: 'Directions' },
    { key: 'genderTarget', label: 'Gender Target' },
    { key: 'customerAgeGroup', label: 'Customer Age Group' },
    { key: 'recommendedUses', label: 'Recommended Uses' },
    { key: 'specialFeatures', label: 'Special Features' },
    { key: 'approvedBy', label: 'Approved By' },
    { key: 'recyclable', label: 'Recyclable' },
    { key: 'status', label: 'Status' }
  ];
  const missingFields = []
  for (let i = 0; i < requiredFields.length; i += 1) {
    const key = requiredFields[i].key;
    const value = productData[key];
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      missingFields.push(requiredFields[i].label)
    } else {
      continue
    }
  }
  if (missingFields.length > 0) {
    return res.status(400).json({ error: `Missing fields: ${missingFields.join(', ')}` });
  } else {
    Product.findOne({ "productName": productData.productName }).then(dup => {
      if (dup) {
        res.json({ error: `Product ${dup.productName} Already Exists` })
      } else {
        Product.countDocuments({}).then(cou => {
          let newProIdNo = addLeadingZero(cou)
          productData.productID = productData.productID + newProIdNo
          const product = new Product(productData);
          product.save()
            .then(savedProduct => {
              console.log("New Product", savedProduct.productName, "Added to Database");
              res.status(201).json({ message: `${savedProduct.productName} Added To Database` });
            })
            .catch(error => {
              console.log(error);
              res.status(400).json({ error: error.message });
            });
        }).catch(error => {
          console.log(error);
          res.status(400).json({ error: error.message })
        });
      }
    }).catch(error => {
      console.log(error);
      res.status(400).json({ error: error.message });
    });
  }
});


// Get All Products
router.get('/allProducts', (req, res) => {
  Product.find()
    .populate("productType", 'typeId name')
    .populate('productDomain', 'domainId name initials')
    .then(products => {
      res.json(products)
    }).catch(err => {
      console.log(err)
      res.json(err)
    })
})

// Update a product
router.put('/products/:productID', (req, res) => {
  const { productID } = req.params;
  const updateData = req.body;
  Product.findOneAndUpdate({ productID: productID }, updateData, { new: true })
    .then(updatedProduct => res.status(200).json(updatedProduct))
    .catch(error => res.status(400).json({ error: error.message }));
});


// Delete a product
router.delete('/products', (req, res) => {
  const { productID } = req.body;
  Product.findOneAndDelete({ productID })
    .then(() => {
      res.status(204).end();
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

module.exports = router;