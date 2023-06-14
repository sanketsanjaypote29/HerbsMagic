// productDomainRoutes.js

const express = require('express');
const router = express.Router();
const ProductDomain = require('../models/productDomain');


// Create a new product domain
router.post('/productDomain', async (req, res) => {
  function getInitials(string) {
    const words = string.split(' ');
    let initials = '';

    for (let i = 0; i < words.length; i += 1) {
      if (words.length == 1) {
        initials += words[i][0].toUpperCase();
        initials += words[i][1].toUpperCase();
      } else {
        initials += words[i][0].toUpperCase();
      }
    }
    return initials;
  }


  const domain = req.body
  let ini = getInitials(domain.newDomain);
  newDomainName = domain.newDomain.toUpperCase()
  if (!domain.newDomain) {
    res.status(400).json({ error: "No Input Received for Creating New Product Domain" });
  } else {
    ProductDomain.findOne({ name: newDomainName }).then(existDomain => {
      if (!existDomain) {
        ProductDomain.findOne({ initials: ini }).then(existIni => {
          if (!existIni) {
            ProductDomain.countDocuments({})
              .then(count => {
                const productDomain = new ProductDomain({
                  domainId: count + 1,
                  name: newDomainName,
                  initials: ini
                });
                productDomain.save().then(saved => {
                  res.status(200).json({ message: "Successfully added new domain", newDomain: saved });
                }).catch(err => {
                  console.log(err)
                  res.status(500).json({ error: err });
                });
              })
              .catch(error => {
                console.error(error);
                res.status(500).json({ error });
              });
          } else {
            res.status(400).json({ error: `Domain Initials Generation Error Either add initials and Domain name manually or make sure that if the domain name is One word then first two letters are not ${existIni.initials} or if two words then the first letters of the two words when combined do not form ${existIni.initials}` });
          }
        });
      } else {
        res.status(400).json({ error: `Domain ${existDomain.name} Already Exists` });
      }
    });
  }
});



// Get all product domains
router.get('/productDomain', async (req, res) => {
  try {
    const productDomains = await ProductDomain.find();
    res.json(productDomains);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});


// Update a product domain
router.put('/productDomain', (req, res) => {
  const domainId = req.body.domainId;
  const statusNew = req.body.status
  ProductDomain.findById(domainId).then(exist => {
    if (exist.status == statusNew) {
      res.json({ error: `The status of domain: ${exist.name} is already ${exist.status}.` })
    } else {
      ProductDomain.findByIdAndUpdate(
        domainId,
        { status: statusNew },
        { new: true }
      ).then(updatedDomain => {
        res.json({ "changes made successfully": updatedDomain })
      }).catch(err => {
        console.log(err)
        res.json({ error: err })
      });
    }
  }).catch(err=>{
    console.log(err)
    res.json({error:`Domain Does not exist`})
  })
});

module.exports = router;