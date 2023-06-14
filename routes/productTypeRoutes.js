// routes/productTypeRoutes.js

const express = require('express');
const router = express.Router();
const ProductType = require('../models/productType');

// Create a new product type
router.post('/productType', (req, res) => {
  let newProductType = req.body.name;
  if (!newProductType) {
    res.status(400).json({ error: "No Input Received for Creating New Product Type" });
  } else {
    ProductType.findOne({ name: newProductType }).then(typeExist => {
      if (!typeExist) {
        ProductType.countDocuments({}).then(count => {
          const productType = new ProductType({
            typeId: count + 1,
            name: newProductType
          });
          productType.save().then(saved => {
            res.status(200).json({ message: "Successfully added new Product type", newType: saved });
          }).catch(err => {
            res.status(500).json({ error: err });
            
          });
        }).catch(err => {
          res.status(500).json({ error: err });
        });
      } else {
        res.status(400).json({ error: `Product Type ${typeExist.name} Already Exists` });
      }
    }).catch(err => {
      res.status(500).json({ error: err });
    });
  }
});


// Get all product types
router.get('/productType', async (req, res) => {
  try {
    const productTypes = await ProductType.find();
    res.json(productTypes);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});


// GET request to retrieve a product type by id
router.get('/productType/:id', (req, res) => {
  const typeId = req.params.id;

  ProductType.findOne({ typeId })
    .then(productType => {
      if (productType) {
        res.status(200).json({ productType });
      } else {
        res.status(404).json({ error: `Product Type with id ${typeId} not found` });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});


// Update a product type
router.put('/productType', (req, res) => {
  const typeId = req.body.typeId;
  const statusNew = req.body.status
  ProductType.findById(typeId).then(exist => {
    if (exist.status == statusNew) {
      res.json({ error: `The status of Type: ${exist.name} is already ${exist.status}.` })
    } else {
      ProductType.findByIdAndUpdate(
        typeId,
        { status: statusNew },
        { new: true }
      ).then(updatedType => {
        res.json({ "changes made successfully": updatedType })
      }).catch(err => {
        console.log(err)
        res.json({ error: err })
      });
    }
  }).catch(err=>{
    console.log(err)
    res.json({error:`Type Does not exist`})
  })
});

module.exports = router;